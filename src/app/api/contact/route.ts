import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

const MAX = { name: 200, email: 320, subject: 200, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** honeypot — humans never see this field */
  company?: string;
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // honeypot — pretend success so bots move on
  if (data.company?.trim()) return NextResponse.json({ ok: true });

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const subject = data.subject?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > MAX.email) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > MAX.name || subject.length > MAX.subject || message.length > MAX.message) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Email isn't configured on the server yet — please email me directly." },
      { status: 500 },
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST, // smtp.gmail.com
    port, // 465 = implicit SSL; 587 would use STARTTLS
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }, // Gmail app password, not the account password
  });

  try {
    await transporter.sendMail({
      // Gmail rewrites `from` to the authenticated account; the display name still shows.
      from: `"${name} via Portfolio" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form send failed:", err);
    return NextResponse.json(
      { error: "Sending failed on the server. Please try again or email me directly." },
      { status: 502 },
    );
  }
}

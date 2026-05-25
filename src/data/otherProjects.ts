import type { Project } from "@/types/content";

/** Earlier projects — compact archive cards. */
export const otherProjects: Project[] = [
  {
    title: "Tic Tac Toe",
    description: "An interactive Tic Tac Toe game with clean, real-time game logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Tic-Tac-Toe-Game/" }],
    image: "/images/projects/tic-tac-toe.jpeg",
  },
  {
    title: "SwiftSend — Courier Service",
    description: "A web application to manage and streamline courier and delivery services.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    links: [
      { label: "Code", href: "https://github.com/Archi0612/Online-Courier-Service-Swiftsend" },
    ],
    image: "/images/projects/swiftsend-courier.jpeg",
  },
  {
    title: "To-Do App",
    description: "A MERN task manager to add, edit, delete, and categorize tasks in a clean UI.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    links: [{ label: "Code", href: "https://github.com/Archi0612/To-do-App-using-MERN-Stack" }],
    image: "/images/projects/todo-app.jpeg",
  },
  {
    title: "Rock Paper Scissors",
    description: "The classic game against a computer opponent with real-time win logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Rock-Paper-Scissors-Game/" }],
    image: "/images/projects/rock-paper-scissors.jpeg",
  },
  {
    title: "Spotify Clone",
    description: "A Spotify-style music interface with playlists and player controls.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Spotify_Clone/" }],
    image: "/images/projects/spotify-clone.webp",
  },
];

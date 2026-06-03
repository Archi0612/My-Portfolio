import type { Project } from "@/types/content";

/**
 * "Where it all started" — beginner-era projects.
 * The first sparks: tiny games, course exercises, and the project that taught me
 * how the web actually fits together. Kept here on purpose, with affection.
 */
export const otherProjects: Project[] = [
  {
    title: "Tic Tac Toe",
    description:
      "My first taste of game logic — two players, a 3×3 grid, and the satisfaction of a clean win check. Pure HTML/CSS/JS, no libraries, no shortcuts.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Tic-Tac-Toe-Game/" }],
    image: "/images/projects/tic-tac-toe.jpeg",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Classic three-way duel against a randomized computer opponent — my early experiment with conditional logic and DOM updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Rock-Paper-Scissors-Game/" }],
    image: "/images/projects/rock-paper-scissors.jpeg",
  },
  {
    title: "Spotify Clone",
    description:
      "A static recreation of Spotify's UI — pixel-pushing my way through playlists, album art, and a working player bar before I knew what React was.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://archi0612.github.io/Spotify_Clone/" }],
    image: "/images/projects/spotify-clone.webp",
  },
  {
    title: "SwiftSend — Courier Service",
    description:
      "A college-era web app to manage couriers and deliveries. My first end-to-end build with PHP + MySQL — auth, CRUD, sessions, and a lot of hard-earned bugs.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    links: [
      { label: "Code", href: "https://github.com/Archi0612/Online-Courier-Service-Swiftsend" },
    ],
    image: "/images/projects/swiftsend-courier.jpeg",
  },
  {
    title: "To-Do App",
    description:
      "The MERN starter that finally made the stack click — add, edit, delete, categorize, persist. Small in scope, huge in mental-model unlocks.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    links: [{ label: "Code", href: "https://github.com/Archi0612/To-do-App-using-MERN-Stack" }],
    image: "/images/projects/todo-app.jpeg",
  },
];

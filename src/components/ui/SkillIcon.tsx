import type { IconType } from "react-icons";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaBolt,
  FaRobot,
  FaPlug,
  FaTerminal,
  FaUsers,
} from "react-icons/fa6";

const map: Record<string, IconType> = {
  code: FaCode,
  server: FaServer,
  database: FaDatabase,
  cloud: FaCloud,
  bolt: FaBolt,
  robot: FaRobot,
  plug: FaPlug,
  terminal: FaTerminal,
  users: FaUsers,
};

export function SkillIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = map[slug] ?? FaCode;
  return <Icon className={className} aria-hidden />;
}

import {
  Gamepad2,
  BriefcaseBusiness,
  GraduationCap,
  PenTool,
  Laptop,
  Cpu,
} from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: typeof Laptop;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Gaming",
    description: "High FPS gaming laptops with RTX graphics.",
    icon: Gamepad2,
  },
  {
    id: 2,
    title: "Business",
    description: "Powerful laptops built for professionals.",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Students",
    description: "Affordable laptops for study and daily work.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Creators",
    description: "Designed for editing, design and content creation.",
    icon: PenTool,
  },
  {
    id: 5,
    title: "Ultrabooks",
    description: "Thin, lightweight and premium performance.",
    icon: Laptop,
  },
  {
    id: 6,
    title: "Workstations",
    description: "Extreme performance for heavy workloads.",
    icon: Cpu,
  },
];
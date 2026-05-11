import type { LucideIcon } from "lucide-react";
import {
  Building2,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  Sparkles
} from "lucide-react";

export type Project = {
  title: string;
  category: string;
  year: string;
  url?: string;
  role: string;
  summary: string;
  image: string;
  icon: LucideIcon;
  metrics: string[];
};

export const projects: Project[] = [
  {
    title: "Tominaga Hospital",
    category: "Hospital Website",
    year: "Direction",
    url: "https://www.tominaga.or.jp/",
    role: "Healthcare web direction / digital storytelling",
    summary:
      "A hospital presence built around calm navigation, institutional clarity, and the quiet confidence expected from advanced medical care.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
    icon: HeartPulse,
    metrics: ["Hospital brand", "UX strategy", "Editorial IA"]
  },
  {
    title: "Tominaga Recruit",
    category: "Recruitment Branding",
    year: "Recruit",
    url: "https://www.tominaga-recruit.com/",
    role: "Recruitment communication / concept direction",
    summary:
      "A recruitment narrative that translates workplace culture into a visual system of purpose, trust, and professional aspiration.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1800&q=85",
    icon: Sparkles,
    metrics: ["Culture story", "Talent journey", "Motion concept"]
  },
  {
    title: "Kawanishi Hospital Resident Site",
    category: "Resident Site",
    year: "Education",
    url: "https://www.kawanishi-hospital-resident.jp/",
    role: "Resident recruitment UX / editorial planning",
    summary:
      "An experience designed to help young physicians understand training, mentorship, and hospital identity without friction.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
    icon: GraduationCap,
    metrics: ["Resident UX", "Content design", "Medical education"]
  },
  {
    title: "Hanyu General Hospital Resident Site",
    category: "Resident Site",
    year: "Education",
    url: "https://www.hanyu-resident.com/",
    role: "Digital direction / recruitment strategy",
    summary:
      "A focused resident recruitment platform balancing clinical seriousness with accessible, human-centered storytelling.",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1800&q=85",
    icon: Building2,
    metrics: ["Medical recruitment", "Narrative system", "Responsive UI"]
  },
  {
    title: "Kyowakai Medical Group",
    category: "Medical Group Website",
    year: "Group",
    url: "https://www.kyowakai.com/",
    role: "Group-scale information architecture",
    summary:
      "A healthcare group experience structured for scale, credibility, patient access, and multi-facility communication.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
    icon: Landmark,
    metrics: ["Group IA", "Facility clarity", "Trust design"]
  },
  {
    title: "Medical Pamphlet Systems",
    category: "Medical Branding / Print",
    year: "Print",
    role: "Editorial design direction / print communication",
    summary:
      "Pamphlet direction for medical institutions, translating dense information into refined editorial communication.",
    image:
      "https://images.unsplash.com/photo-1581091870622-7c0c787dcf02?auto=format&fit=crop&w=1800&q=85",
    icon: FileText,
    metrics: ["Higashi Osaka", "Osaka Rosai", "Editorial design"]
  }
];

export const capabilities = [
  "Healthcare branding",
  "Hospital website direction",
  "Recruitment branding",
  "UX strategy",
  "Editorial communication",
  "Digital storytelling"
];

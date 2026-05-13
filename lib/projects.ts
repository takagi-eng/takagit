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
      "先進医療の信頼感を、落ち着いた導線と明快な情報設計で伝える病院サイト。",
    image: "/works/tominaga-hospital.png",
    icon: HeartPulse,
    metrics: ["病院ブランド", "UX設計", "情報編集"]
  },
  {
    title: "Tominaga Recruit",
    category: "Recruitment Branding",
    year: "Direction",
    url: "https://www.tominaga-recruit.com/",
    role: "Recruitment communication / concept direction",
    summary:
      "職場の空気感と働く意義を、採用候補者へ自然に届ける採用サイト。",
    image: "/works/tominaga-recruit.png",
    icon: Sparkles,
    metrics: ["文化訴求", "採用導線", "映像設計"]
  },
  {
    title: "Kawanishi Hospital Resident Site",
    category: "Resident Site",
    year: "Education",
    url: "https://www.kawanishi-hospital-resident.jp/",
    role: "Resident recruitment UX / editorial planning",
    summary:
      "研修内容、指導体制、病院らしさを若手医師へわかりやすく伝える設計。",
    image: "/works/kawanishi-hospital.png",
    icon: GraduationCap,
    metrics: ["研修医UX", "内容設計", "医療教育"]
  },
  {
    title: "Hanyu General Hospital Resident Site",
    category: "Resident Site",
    year: "Education",
    url: "https://www.hanyu-resident.com/",
    role: "Digital direction / recruitment strategy",
    summary:
      "臨床の真摯さと人の魅力を両立させた、研修医採用の情報体験。",
    image: "/works/hanyu-general.png",
    icon: Building2,
    metrics: ["医療採用", "物語設計", "レスポンシブ"]
  },
  {
    title: "Kyowakai Medical Group",
    category: "Medical Group Website",
    year: "Direction",
    url: "https://www.kyowakai.com/",
    role: "Group-scale information architecture",
    summary:
      "複数施設の情報を整理し、グループ全体の信頼とアクセス性を高める設計。",
    image: "/works/kyowakai.png",
    icon: Landmark,
    metrics: ["グループ設計", "施設整理", "信頼設計"]
  },
  {
    title: "Pamphlet",
    category: "Medical Branding / Print",
    year: "Print",
    url: "/works/pamphlet.png",
    role: "Editorial design direction / print communication",
    summary:
      "医療機関の情報を、読みやすく上質なパンフレット表現へ編集。",
    image: "/works/pamphlet.png",
    icon: FileText,
    metrics: ["東大阪", "大阪労災", "編集設計"]
  }
];

export const capabilities = [
  "医療ブランディング",
  "病院サイト設計",
  "採用ブランディング",
  "UX戦略",
  "採用サイト設計",
  "LP制作"
];

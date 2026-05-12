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
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
    icon: HeartPulse,
    metrics: ["病院ブランド", "UX設計", "情報編集"]
  },
  {
    title: "Tominaga Recruit",
    category: "Recruitment Branding",
    year: "Recruit",
    url: "https://www.tominaga-recruit.com/",
    role: "Recruitment communication / concept direction",
    summary:
      "職場の空気感と働く意義を、採用候補者へ自然に届ける採用サイト。",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1800&q=85",
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
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
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
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1800&q=85",
    icon: Building2,
    metrics: ["医療採用", "物語設計", "レスポンシブ"]
  },
  {
    title: "Kyowakai Medical Group",
    category: "Medical Group Website",
    year: "Group",
    url: "https://www.kyowakai.com/",
    role: "Group-scale information architecture",
    summary:
      "複数施設の情報を整理し、グループ全体の信頼とアクセス性を高める設計。",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
    icon: Landmark,
    metrics: ["グループ設計", "施設整理", "信頼設計"]
  },
  {
    title: "Medical Pamphlet Systems",
    category: "Medical Branding / Print",
    year: "Print",
    role: "Editorial design direction / print communication",
    summary:
      "医療機関の情報を、読みやすく上質なパンフレット表現へ編集。",
    image:
      "https://images.unsplash.com/photo-1581091870622-7c0c787dcf02?auto=format&fit=crop&w=1800&q=85",
    icon: FileText,
    metrics: ["東大阪", "大阪労災", "編集設計"]
  }
];

export const capabilities = [
  "医療ブランディング",
  "病院サイト設計",
  "採用ブランディング",
  "UX戦略",
  "編集コミュニケーション",
  "デジタルストーリーテリング"
];

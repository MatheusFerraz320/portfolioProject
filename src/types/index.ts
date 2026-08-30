export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Front-end" | "AI / Full-Stack";
  featured: boolean;
  technologies: string[];
  description: string;
  features: string[];
  poster: string;
  codeLink: string;
  backLink?: string;
  gradient: string;
}

export interface Language {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education" | "milestone";
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

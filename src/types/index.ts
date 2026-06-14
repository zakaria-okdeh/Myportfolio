export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  duration: string;
  role: string;
  details: {
    overview: string;
    achievements: string[];
    technologies: string[];
    gallery: string[];
  };
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Skill {
  name: string;
  items: string[];
}

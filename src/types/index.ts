export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface Award {
  id: number;
  title: string;
  year: string;
  issuer: string;
  description: string;
}
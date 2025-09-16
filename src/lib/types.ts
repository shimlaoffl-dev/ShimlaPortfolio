export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type Education = {
  degree: string;
  institution: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Skills = {
  crm: string[];
  dataAnalysis: string[];
  marketing: string[];
  communication: string[];
  processAndBusiness: string[];
};

export type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

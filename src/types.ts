export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  detailedOutcome: string;
  tags: string[];
  tools: string[];
  objective?: string;
  practice?: string;
  buttonText?: string;
  documentUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  result: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface IPersonalData {
  fullName: string;
  headline: string;
  avatarUrl: string | null;
  email: string;
  phone: string;
  location: string | null;
  summary: string;
  links: string[];
}

export interface IEmploymentHistory {
  id: string;
  company: string;
  role: string;
  employment_type: string;
  start: string;
  end: string;
  location: string | null;
  highlights: string[];
}

export interface IEducation {
  id: string;
  college: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  gpa: string | null;
}

export interface ISkill {
  id: string;
  skillName: string;
  level: string[];
}

export interface IExtraSection {
  certifications: {
    name: string;
    issuer: string;
    date: string;
    url: string | null;
  }[];
  languages: {
    name: string;
    level: string | null;
  }[];
  projects: {
    name: string;
    description: string | null;
    url: string | null;
  }[];
}

export interface IAuthContextType {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  refreshAuth: () => Promise<void>;
  isUser: string;
  setIsUser: (value: string) => void;
  getUser: () => Promise<void>;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  approach: string;
  techStackDetails: {
    category: string;
    items: string[];
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  whatILearned: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'c++-dsa' | 'web-dev' | 'tools-systems';
  categoryLabel: string;
  shortDescription: string;
  role: string;
  status: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  accentColor: string;
  caseStudy: CaseStudy;
}

export interface SkillItem {
  name: string;
  level: 'Core Strength' | 'Actively Using' | 'Fundamental Understanding' | 'Currently Exploring';
  highlight: string;
  category: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  id: string;
  step: string;
  title: string;
  period: string;
  description: string;
  takeaways: string[];
  status: 'completed' | 'current' | 'upcoming';
  icon: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  currentStage: 'Learning' | 'Building' | 'Testing' | 'Improving';
  stageIndex: number; // 0: Learning, 1: Building, 2: Testing, 3: Improving
  technologies: string[];
}

export interface BeyondCodeItem {
  id: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  connectionToEngineering: string;
}

export interface StatItem {
  id: string;
  badge: string;
  number: string;
  label: string;
  sublabel: string;
  detail: string;
}

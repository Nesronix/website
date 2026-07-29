export type ActiveTab = 
  | 'home'
  | 'ecosystem'
  | 'projects'
  | 'labs'
  | 'academy'
  | 'community'
  | 'governance'
  | 'contact';

export interface ProjectItem {
  id: string;
  name: string;
  repo: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  category: 'AI' | 'Security' | 'Framework' | 'CLI' | 'SDK' | 'Awesome';
  tags: string[];
  installCommand?: string;
  maintainer: string;
  status: 'Active' | 'Beta' | 'Lab';
}

export interface ResearchItem {
  id: string;
  title: string;
  category: 'AI Research' | 'Security Exploits' | 'Robotics' | 'Autonomous Agents';
  summary: string;
  status: 'In Progress' | 'Published' | 'Experimental';
  lead: string;
  link?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  enrolled: number;
  description: string;
  topics: string[];
  isFree: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Hackathon' | 'Workshop' | 'Meetup' | 'Paper Reading';
  date: string;
  time: string;
  location: string;
  speakers: string[];
  link: string;
}

export interface ContributorRole {
  role: string;
  description: string;
  responsibilities: string[];
  badgeColor: string;
}

export interface GovernanceDoc {
  id: string;
  title: string;
  filename: string;
  summary: string;
  content: string;
}

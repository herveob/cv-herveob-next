export enum SkillCategory {
  FRONTEND = 'Frontend',
  FULLSTACK = 'Fullstack',
  FRAMEWORK = 'Framework',
  BACKEND = 'Backend',
  DATABASE = 'Database',
  TOOLS = 'Tools',
}
export type Skill = {
  name: string;
  category: SkillCategory;
  rating: number;
}

export type MapSkillsByCategory = Map<SkillCategory, Skill[]>;

const skills: Skill[] = [
  {
    name: 'Node.js',
    category: SkillCategory.BACKEND,
    rating: 4,
  },
  {
    name: 'Express.js',
    category: SkillCategory.BACKEND,
    rating: 4,
  },
  {
    name: 'GraphQL',
    category: SkillCategory.BACKEND,
    rating: 2,
  },
  {
    name: 'Angular',
    category: SkillCategory.FRAMEWORK,
    rating: 2,
  },
  {
    name: 'Next.js',
    category: SkillCategory.FRAMEWORK,
    rating: 2,
  },
  {
    name: 'React',
    category: SkillCategory.FRONTEND,
    rating: 2,
  },
  {
    name: 'Vue.js',
    category: SkillCategory.FRONTEND,
    rating: 2,
  },
  {
    name: 'HTML5',
    category: SkillCategory.FRONTEND,
    rating: 3,
  },
  {
    name: 'CSS3',
    category: SkillCategory.FRONTEND,
    rating: 3,
  },
  {
    name: 'MongoDB',
    category: SkillCategory.DATABASE,
    rating: 3,
  },
  {
    name: 'Firebase',
    category: SkillCategory.DATABASE,
    rating: 2,
  },
  {
    name: 'PostgreSQL',
    category: SkillCategory.DATABASE,
    rating: 3,
  },
  {
    name: 'Git',
    category: SkillCategory.TOOLS,
    rating: 4,
  },
  {
    name: 'Genkins',
    category: SkillCategory.TOOLS,
    rating: 2,
  },
  {
    name: 'Docker',
    category: SkillCategory.TOOLS,
    rating: 3,
  }
];



export default skills;

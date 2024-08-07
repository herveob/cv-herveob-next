import prisma from '../../lib/prisma';

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

export  default class SkillService {
  async getSkills(): Promise<Skill[]> {
    const skills = await prisma.skill.findMany();

    return skills.map((skill) => {
      return {
        ...skill,
        category: SkillCategory[skill.category],
      };
    });
  }

  async mapSkillsByCategory(): Promise<MapSkillsByCategory> {
    const skills = await this.getSkills();
    return skills.reduce((acc, skill) => {
      const categorySkills = acc.get(skill.category) || [];
      categorySkills.push(skill);
      acc.set(skill.category, categorySkills);
      return acc;
    }, new Map<SkillCategory, Skill[]>());
  }

  static createService(): SkillService {
    return new SkillService();
  }
}
import prisma from '../../lib/prisma';

export enum ContractType {
  CDI = 'CDI',
  FREELANCE = 'Freelance',
  CONSULTANT = 'Consultant',
}

export enum PresenceType {
  ON_SITE = 'Sur site',
  HYBRID = 'Hybride',
  REMOTE = 'Télétravail',
}

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  contractType: ContractType;
  stack: string[];
  tasks?: string[];
  presenceType: PresenceType;
};

export default class ExperienceService {
  async getExperiences(): Promise<Experience[]> {
    const experiences = await prisma.experience.findMany();
    return experiences.map((experience) => {
      return {
        ...experience,
        contractType: ContractType[experience.contractType],
        presenceType: PresenceType[experience.presenceType],
      };
    });
  }

  static createService() {
    return new ExperienceService();
  }
}
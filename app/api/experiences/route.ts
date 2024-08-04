import { NextApiRequest } from 'next';
import ExperienceService from './ExperienceService';

const experienceService = ExperienceService.createService();


export async function GET(
  req: NextApiRequest,
) {
  const experiences = await experienceService.getExperiences();
  return Response.json(experiences);
}
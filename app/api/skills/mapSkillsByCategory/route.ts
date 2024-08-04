import { NextApiRequest } from 'next';
import SkillService from '../SkillService';

const skillService = SkillService.createService();


export async function GET(
  req: NextApiRequest,
) {
  const mapSkillsByCategory = await skillService.mapSkillsByCategory();
  console.log({ mapSkillsByCategory });
  const data = Array.from(mapSkillsByCategory.entries());
  return Response.json(data);
}
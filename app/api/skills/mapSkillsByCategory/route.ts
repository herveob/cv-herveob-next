import { NextRequest } from 'next/server';
import SkillService from '../SkillService';

const skillService = SkillService.createService();


export async function GET(
  req: NextRequest,
) {
  const mapSkillsByCategory = await skillService.mapSkillsByCategory();
  const data = Array.from(mapSkillsByCategory.entries());
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
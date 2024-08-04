import { NextRequest } from 'next/server';
import ExperienceService from './ExperienceService';

const experienceService = ExperienceService.createService();


export async function GET(
  req: NextRequest,
) {
  const experiences = await experienceService.getExperiences();
  return new Response(JSON.stringify(experiences), {
    headers: { 'Content-Type': 'application/json' },
  });
}
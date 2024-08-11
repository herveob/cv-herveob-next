import skillsData from '../../data/skills';

export function GET(request: Request) {
  return new Response(JSON.stringify(skillsData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
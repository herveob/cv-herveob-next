import experiencesData from '../../data/experiences';

export function GET(request: Request) {
  return new Response(JSON.stringify(experiencesData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
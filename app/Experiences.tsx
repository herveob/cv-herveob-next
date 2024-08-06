import { Experience as ExperienceType } from './api/experiences/ExperienceService';
import Experience from './Experience';
import Stack from './Stack';
import Tasks from './Tasks';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const Experiences = async () => {
  if (!baseUrl) {
    return <div>API URL not found</div>;
  }
  const apiFetch = await fetch(`${baseUrl}/experiences`);
  const experiences: ExperienceType[] = await apiFetch.json();
  return (
    <div className="mt-8 mx-4">
      <div>
        <h1 className="text-3xl">Expériences professionelles</h1>
        <div className="mt-8 max-w-2xl">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
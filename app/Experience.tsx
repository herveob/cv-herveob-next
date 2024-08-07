import { Experience as ExperienceType } from './api/experiences/ExperienceService';
import Stack from './Stack';
import Tasks from './Tasks';
const Experience = ({experience, index }: {experience: ExperienceType, index: number}) => {
  return (
    <div key={index} className="mt-4 mb-8 px-4 py-4 rounded-2xl bg-neutral-700">
    <div>
      <div className="flex flex-row justify-between mb-4">
        <p className="text-xl">{experience.title}</p>
        <p className="text-cyan-700 capitalize">{experience.presenceType}</p>
      </div>
      <p className="text-cyan-700 capitalize ml-2">{`${experience.company} - ${experience.contractType.toLocaleUpperCase()} - ${experience.location}`}</p>
      <p className="text-gray-500 capitalize ml-2">{`${experience.startDate} - ${experience.endDate}`}</p>
    </div>
    <p className="mt-4">{experience.description}</p>
    {
      experience.tasks && experience.tasks?.length > 0 && (
        <Tasks tasks={experience.tasks} />
      )
    }
    {
      experience.stack && experience.stack?.length > 0 && (
        <Stack stack={experience.stack} />
      )
    }
  </div>
  );
};

export default Experience;
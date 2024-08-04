import { Experience } from './api/experiences/ExperienceService';
const Experiences = async () => {
  const apiFetch = await fetch('http://localhost:3000/api/experiences');
  const experiences: Experience[] = await apiFetch.json();
  console.log({ experiences });
  return (
    <div className="mt-8 mx-4">
      <div>
        <h1 className="text-3xl">Expériences professionelles</h1>
        <div className="mt-8 max-w-2xl">
          {experiences.map((experience, index) => (
            <div key={index} className="mt-4 mb-8 px-4 py-4 rounded-2xl bg-neutral-700">
              <div>
                <p className="text-xl mb-3">{experience.title}</p>
                <p className="text-cyan-700 capitalize ml-2">{`${experience.company} - ${experience.contractType.toLocaleUpperCase()}`}</p>
                <p className="text-gray-500 capitalize ml-2">{`${experience.startDate} - ${experience.endDate}`}</p>
              </div>
              <p className="mt-4 text-lg">{experience.description}</p>
              {
                experience.tasks && (
                  <div className="mt-2 ml-6">
                    <ul>
                      {experience.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="mt-1 list-disc font-extralight">{task}</li>
                      ))}
                    </ul>
                  </div>
                )
              }
              <div className="mt-4">
                <p className="text-lg mb-4">Stack technique :</p>
                <div className="mt-1 ml-4 flex flex-wrap">
                  {experience.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="mb-2 mr-2 bg-cyan-800 text-neutral-900 p-1 rounded-lg">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
import { Skill, SkillCategory } from './api/skills/SkillService';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const Skills = async () => {
  if (!baseUrl) {
    return <div>API URL not found</div>;
  }
  const apiFetch = await fetch(`${baseUrl}/skills/mapSkillsByCategory`);
  const response = await apiFetch.json();
  const mapSkillsByCategory = await new Map<SkillCategory, Skill[]>(response);

  return (
    <div className="ml-4">
      <h2 className="text-white mt-4 text-3xl">Compétences</h2>
      <div className="text-white mt-2">
        {Array.from(mapSkillsByCategory.keys()).map((category, index) => (
          <div key={index} className="mt-2">
            <h3 className="text-white mt-4 ml-2 text-2xl">{category}</h3>
            <div className="flex flex-wrap mt-2 ml-6">
              {mapSkillsByCategory.get(category)?.map((skill, skillIndex) => (
                <p key={skillIndex} className="text-cyan-700 mt-1 mr-4 text-lg">{skill.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import skillData, { MapSkillsByCategory, Skill } from '../data/skills';

const mapSkillsByCategory = (skills: Skill[]): MapSkillsByCategory => skills.reduce((acc, skill) => {
  const categorySkills = acc.get(skill.category) || [];
  categorySkills.push(skill);
  acc.set(skill.category, categorySkills);
  return acc;
}, new Map());

export default function Skills() {
  const _mapSkillsByCategory: MapSkillsByCategory = mapSkillsByCategory(skillData);

  return (
    <div className="ml-4">
      <h2 className="text-white mt-4 text-3xl">Compétences</h2>
      <div className="text-white mt-2">
        {Array.from(_mapSkillsByCategory.keys()).map((category, index) => (
          <div key={index} className="mt-2">
            <h3 className="text-white mt-4 ml-2 text-2xl">{category}</h3>
            <div className="flex flex-wrap mt-2 ml-6">
              {_mapSkillsByCategory.get(category)?.map((skill, skillIndex) => (
                <p key={skillIndex} className="text-cyan-700 mt-1 mr-4 text-lg">{skill.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

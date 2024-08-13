import experiences from '../data/experiences';
import Experience from './Experience';

export default function Experiences() {
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

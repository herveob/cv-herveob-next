import Experiences from './Experiences';

const MainContent = async () => {
  return (
    <>
      <div className="mt-6 ml-4 mb-2 mr-4">
        <h1 className="text-3xl uppercase">Profile FREELANCE</h1>
        <p className="mt-4 text-lg font-extralight">Développeur Fullstack Node.js / React</p>
      </div>
      <div className="mt-10 ml-4 mb-2 mr-4">
        <h1 className="text-2xl uppercase">Formations</h1>
        <div className="flex flex-col mt-4 gap-6">
          <div className="flex flex-row">
            <div className="w-40 ml-4">
              <p>2010</p>
            </div>
            <div className="flex flex-col ml-8">
              <p>BTS informatique de gestion</p>
              <p className="text-cyan-700">Montpellier</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-40 ml-4">
              <p>2005</p>
            </div>
            <div className="flex flex-col ml-8">
              <p>Baccalauréat S</p>
              <p className="text-cyan-700">Pointe-à-Pitre</p>
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </>
  );
};

export default MainContent;
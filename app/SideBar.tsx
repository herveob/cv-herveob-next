import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Skills = dynamic(() => import('./Skills'));

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/profile.webp"
          alt="Hervé OCTUVON-BAZILE"
          width={180}
          height={180}
          className="rounded-full mt-4"
          priority
        />
        <h1 className="text-white mt-4 text-3xl text-center">Hervé OCTUVON-BAZILE</h1>
        <p className="text-gray-400 text-xl mt-1">Développeur Web</p>
        <p className="text-gray-400 mt-1">EURL DevHOB</p>
      </div>
      <div className="flex flex-col mt-4 ml-5">
        <div className="flex flex-row items-center">
          <HomeIcon className="mr-2" />
          <p className="text-white font-extralight mt-1 text-lg">Île de France</p>
        </div>
        <div className="flex flex-row items-center">
          <EmailIcon className="mr-2" />
          <p className="text-white font-extralight mt-1 text-lg">herveob@gmail.com</p>
        </div>
        <div className="flex flex-row items-center">
          <PersonIcon className="mr-2" />
          <p className="text-white font-extralight mt-1 text-lg">Age: 37 ans</p>
        </div>
        <div className="flex flex-row items-center">
          <LinkedInIcon className="mr-2" />
          <Link className="text-white font-extralight mt-1 text-lg" href="https://www.linkedin.com/in/herveob/">linkedin.com/in/herveob</Link>
        </div>
      </div>
      <Skills />
      <div className="mt-4 ml-4 mb-3">
        <h2 className="text-white text-3xl">Langues</h2>
        <p className="text-white font-extralight mt-1 text-lg">Français: Langue maternelle</p>
        <p className="text-white font-extralight mt-1 text-lg">Anglais: Courant</p>
      </div>
    </div>
  );
};

export default SideBar;

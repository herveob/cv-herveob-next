import SideBar from './SideBar';
import MainContent from './MainContent';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen">
      <div className="w-full md:w-1/4 bg-neutral-900">
        <SideBar />
      </div>
      <div className="w-full md:w-3/4 bg-neutral-800">
        <MainContent />
      </div>
    </div>
  );
}

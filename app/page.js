import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="w-full min-h-screen main  bg-gray-50 flex">
      <Sidebar />
      <Main />
    </div>
  );
}

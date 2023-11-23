import Image from "next/image";
import Content from "./Content";
import Header from "./Header";

const Main = () => {
  return (
    <main className="flex-1 pb-4">
      <div className="flex items-center justify-between py-5 px-10 ml-6">
        <div className="flex space-x-2 items-center">
          <Image
            src="left.svg"
            width={25}
            height={20}
            className=" bg-gray-200 rounded-lg border border-indigo-600"
          />
          <h2 className="text-xl font-semibold leading-relaxed text-gray-800">
            Algorithms 101
          </h2>
        </div>
        <div className="flex space-x-2">
          <button className="flex px-4 text-sm border border-indigo-600 py-2.5 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-y-95 ">
            <Image src="call.svg" width={25} height={20} className="mr-1" />
            <span>Call Teacher</span>
          </button>
          <button className="flex px-4 text-sm border border-indigo-600 py-2.5 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-y-95 ">
            <Image
              src="support.svg"
              width={25}
              height={20}
              className="mr-1 fill-gray-50"
            />
            <span>Support</span>
          </button>
        </div>
      </div>
      <Header />
      <Content />
    </main>
  );
};

export default Main;

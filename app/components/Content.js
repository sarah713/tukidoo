"use client";
import Image from "next/image";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Content = () => {
  return (
    <div className="flex  mt-4">
      <div className="flex flex-col ml-20 ">
        <div className="rounded-lg border border-gray-400 p-3 max-w-fit ">
          <Image src="students.svg" width={120} height={90} />
          <span className="absolute text-white px-1 ml-[-10px] z-10 bg-indigo-600 mt-[-0.8rem] rounded-md">
            Riya
          </span>
        </div>
        <div className="rounded-lg border border-gray-400 p-3 max-w-fit mt-3">
          <Image src="students.svg" width={120} height={90} />
          <span className="absolute text-white px-1 ml-[-10px] z-10 bg-indigo-600 mt-[-0.8rem] rounded-md">
            Sarah
          </span>
        </div>
        <div className="pt-2 mt-5 flex flex-wrap gap-x-2 hover:cursor-pointer rounded-xl max-w-[180px]">
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="camoff.svg"
              width={50}
              height={30}
              className="p-2 bg-gray-100 hover:bg-indigo-400"
            />
            <span>Cam</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="mic.svg"
              width={50}
              height={30}
              className="p-2 bg-gray-100 hover:bg-indigo-400"
            />
            <span>Mic</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="share.svg"
              width={50}
              height={30}
              className="p-2 bg-gray-100 hover:bg-indigo-400"
            />
            <span>Share</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="chat.svg"
              width={50}
              height={30}
              className="p-2 bg-gray-100 hover:bg-indigo-400"
            />
            <span>Chat</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Image
              src="leave.svg"
              width={50}
              height={30}
              className="p-2 bg-gray-100 hover:bg-indigo-400"
            />
            <span>Leave</span>
          </div>
        </div>
      </div>
      <div className="flex w-[900px]">
        <iframe
          src={"https://www.youtube.com/embed/" + "0JUN9aDxVmI"}
          title="math"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="lg:w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Content;

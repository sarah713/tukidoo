import Image from "next/image";

const Header = () => {
  const nav = [
    { name: "Classroom", icon: "class.svg" },
    { name: "Whiteboard", icon: "board.svg" },
    { name: "Videos", icon: "video.svg" },
    { name: "Slide Show", icon: "slideshow.svg" },
    { name: "Documents", icon: "document.svg" },
    { name: "Doc.Cam", icon: "doccam.svg" },
  ];
  return (
    <ul className="flex gap-x-20 items-center px-4 border-y border-gray-200 ml-12 flex-wrap">
      {nav.map((obj) => (
        <li className="flex justify-center items-center  text-gray-500 ">
          <a href="#" className="p-2 gap-x-1 flex hover:text-indigo-600">
            <Image src={obj.icon} width={20} height={15} />
            <span>{obj.name}</span>
            <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Header;

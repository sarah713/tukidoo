import Image from "next/image";

const Sidebar = () => {
  const svgs = [
    "menu.svg",
    "notification.svg",
    "timer.svg",
    "assignment.svg",
    "eye.svg",
    "people.svg",
    "analytic.svg",
  ];
  return (
    <aside className="py-6 px-3 w-14 min-h-screen border-r border-gray-200 fixed overflow-hidden">
      <Image src="/Hands.png" width={60} height={20} />

      <ul className="flex flex-col gap-y-6 pt-10">
        {svgs.map((icon) => (
          <li className="">
            <a href="#" className="">
              <Image src={icon} width={25} height={15} />{" "}
            </a>
          </li>
        ))}
        <li className="mt-20">
          <a href="#" className="">
            <Image src="user.svg" width={25} height={15} />{" "}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import line from "../assets/images/Vector 24.png";
import rectangle from "../assets/images/Rectangle 292.png";
import { useState, useEffect, useRef } from "react";

interface SidebarProps {
  activeTabs: string;
  setActiveTabs: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTabs, setActiveTabs }) => {
 

  const tabs = [
    { name: "All Causes", count: 80 },
    { name: "Education", count: 12 },
    { name: "Social Services", count: 6 },
    { name: "Children and Elderlies", count: 20 },
    { name: "End Hunger", count: 16 },
    { name: "Health Care", count: 21 },
    { name: "Environment", count: 5 },
  ];

  const [isFixed, setIsFixed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;

      if (sidebar) {
        const sidebarTop = 200;
        const scrollY = window.scrollY;

        if (scrollY > sidebarTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isFixed ? "absolute top-0 left-0" : ""} ref={sidebarRef}>
      <h1 className="text-3xl font-bold">Causes</h1>
      <div className="flex mt-4 ">
        <img src={line} alt="/" className="mb-8 w-[310px]" />
        <img src={rectangle} alt="/" className="h-[2px] w-12" />
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex mb-10 font-semibold ${
            activeTabs === tab.name
              ? "text-blue-600 hover:text-gray-500 cursor-pointer"
              : "hover:text-gray-500 cursor-pointer"
          }`}
          onClick={() => setActiveTabs(tab.name)
            
          }
        >
          <p className="mr-auto">{tab.name}</p>
          <p>({tab.count})</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

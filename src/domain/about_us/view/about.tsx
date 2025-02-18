
import AboutUs from "../components/about.comp";
import Mission from "../components/mission.comp";
import Change from "../components/change.comp";
import { useEffect, useState } from "react";
import Tabs from "../components/tab_selector";



export default function About() {

   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
     // Trigger the transition effect after component mounts
     setIsLoaded(true);
   }, []);
  return (
      <div
        className={`mt-[200px]  transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutUs />
        {/* <Mission /> */}
        <Tabs />
        <Change />
      </div>
  );
}

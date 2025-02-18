import { useEffect, useState } from "react";
import Cause from "../components/cause.comp";

export default function Causes() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition effect after component mounts
    setIsLoaded(true);
  }, []);
  return (
      <div className={`mt-[150px]  transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Cause />
      </div>
  );
}

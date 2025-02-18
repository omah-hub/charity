import { useState } from "react";
import Vision from "./vision";
import Values from "./values";
import Mission from "./mission.comp";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  return (
    <div className="">
      {/* Tabs */}
      <div className="flex px-4 text-xl max-w-[1400px] mx-auto">
        <h1
          className={`md:px-16 md:py-4 px-4 py-4 cursor-pointer ${
            activeTab === "Mission" ? "bg-[#061220] text-white" : "bg-[#E5F0FF]"
          }`}
          onClick={() => setActiveTab("Mission")}
        >
          Mission
        </h1>
        <h1
          className={`md:px-16 md:py-4 px-4 py-4 cursor-pointer ${
            activeTab === "Vision" ? "bg-[#061220] text-white" : "bg-[#E5F0FF]"
          }`}
          onClick={() => setActiveTab("Vision")}
        >
          Vision
        </h1>
        <h1
          className={`md:px-16 md:py-4 px-4 py-4 cursor-pointer ${
            activeTab === "Values" ? "bg-[#061220] text-white" : "bg-[#E5F0FF]"
          }`}
          onClick={() => setActiveTab("Values")}
        >
          Values
        </h1>
      </div>
      <div>
        {activeTab === "Mission" && <Mission />}
        {activeTab === "Vision" && <Vision />}
        {activeTab === "Values" && <Values />}
      </div>
    </div>
  );
};

export default Tabs;

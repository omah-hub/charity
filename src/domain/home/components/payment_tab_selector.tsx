import { useState } from "react";
import Online from "./online_payment";
import Transfer from "./transfer";

export default function Tab() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="text-lg md:text-xl">
      <div className="gap-5 flex">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-slate-400"
            checked={activeTab === 1}
            onChange={() => setActiveTab(1)}
          />
          <span className="ml-2">Online Payment</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-slate-400"
            checked={activeTab === 2}
            onChange={() => setActiveTab(2)}
          />
          <span className="ml-2">Bank Transfer</span>
        </label>
      </div>
      <div>
        {activeTab === 1 && <Online />}
        {activeTab === 2 && <Transfer />}
      </div>
    </div>
  );
}

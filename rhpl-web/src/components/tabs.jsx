import React from "react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col sm:flex-row border border-gray-400 w-full sm:w-auto">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`ease-in-out
                px-4 sm:px-6 py-2 font-semibold transition-all
                border-b sm:border-b-0 sm:border-r border-gray-400
                ${isActive ? "bg-[#0e6ba8] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}
                ${index === tabs.length - 1 ? "border-b-0 sm:border-r-0" : ""}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Tabs;

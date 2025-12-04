import React from "react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all
              ${
                activeTab === tab.id
                  ? "bg-[#0e6ba8] text-white shadow-md"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

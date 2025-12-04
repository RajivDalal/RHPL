import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";
import proposals from "../data/proposal_data.js";

const Approved_proposals = () => {
  const rankGroup = { "A*": 1, "A": 1, "B": 2, "N": 2, "U": 3 };

  const getLastName = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1].toLowerCase();
  };

  const sortByRankGroupAndName = (a, b) => {
    const groupA = rankGroup[a["Rank"]] || 4;
    const groupB = rankGroup[b["Rank"]] || 4;

    if (groupA !== groupB) return groupA - groupB;
    return getLastName(a["Name of the presenter"]).localeCompare(
      getLastName(b["Name of the presenter"])
    );
  };

  const talks = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Talk")
    .sort(sortByRankGroupAndName);

  const posters = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Poster")
    .sort(sortByRankGroupAndName);

  const ProposalList = ({ data }) => (
    <ul className="space-y-4">
      {data.map((item, i) => (
        <li key={i} className="pb-3 border-b border-gray-300">
          <div className="font-semibold text-gray-900 text-lg">
            {item["Title of your proposal"]}
          </div>
          <div className="text-[1.1rem] text-gray-700 mt-1 capitalize font-medium">
            {item["Name of the presenter"]}
          </div>
        </li>
      ))}
    </ul>
  );

  const [activeTab, setActiveTab] = useState("talks");

  const tabs = [
    { id: "talks", label: "Accepted Talks" },
    { id: "posters", label: "Accepted Posters" },
  ];

  return (
    <div className="content">
      <p className="contain py-10 space-y-2">
      <h1 className="text-[27px] font-bold">Accepted Talks and Posters</h1>
      <hr className="border-black pb-4"/>

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "talks" && (
        <div>
          <span className="block text-2xl font-bold text-gray-900 mb-4">
            Accepted Talks
          </span>
          <ProposalList data={talks} />
        </div>
      )}

      {activeTab === "posters" && (
        <div>
          <span className="block text-2xl font-bold text-gray-900 mb-4">
            Accepted Posters
          </span>
          <ProposalList data={posters} />
        </div>
      )}
      </p>
    </div>
  );
};

export default Approved_proposals;

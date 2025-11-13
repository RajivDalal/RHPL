import proposals from '../data/proposal_data.js';

const Approved_proposals = () => {
  // Define the rank order priority
  const rankOrder = { "A*": 1, "A": 2, "B": 3, "N": 4, "U": 5 };

  // Helper function to extract last name
  const getLastName = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1].toLowerCase();
  };

  // Sorting function based on rank and then last name
  const sortByRankAndName = (a, b) => {
    const rankA = rankOrder[a["Rank"]] || 6;
    const rankB = rankOrder[b["Rank"]] || 6;

    if (rankA !== rankB) return rankA - rankB; // sort by rank
    return getLastName(a["Name of the presenter"]).localeCompare(
      getLastName(b["Name of the presenter"])
    ); // sort by last name
  };

  const talks = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Talk")
    .sort(sortByRankAndName);

  const posters = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Poster")
    .sort(sortByRankAndName);

  const ProposalList = ({ data }) => (
    <ul className="space-y-4">
      {data.map((item, i) => (
        <li key={i} className="pb-3 border-b border-gray-300">
          <div className="font-semibold text-gray-900 text-lg">
            {item["Title of your proposal"]}
          </div>
          <div className="text-[1.07rem] text-gray-700 mt-1 capitalize font-medium">
            {item["Name of the presenter"]}
          </div>
          {item["Rank"] && (
            <div className="text-xs text-gray-500 mt-1">
              Rank: {item["Rank"]}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="content">
      <p className="py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Accepted Talks</h2>
        <hr className="border-black pb-6" />
        <ProposalList data={talks} />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-2">Accepted Posters</h2>
        <hr className="border-black pb-6" />
        <ProposalList data={posters} />
      </p>
    </div>
  );
};

export default Approved_proposals;

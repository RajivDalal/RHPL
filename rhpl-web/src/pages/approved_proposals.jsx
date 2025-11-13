import proposals from '../data/proposal_data.js';

const Approved_proposals = () => {
  // Define custom order for ranks
  const rankOrder = ["A*", "A", "B", "N", "U"];

  // Sorting function based on custom rank order
  const sortByRank = (a, b) => {
    const rankA = a["Rank"] ? a["Rank"].toUpperCase().trim() : "U";
    const rankB = b["Rank"] ? b["Rank"].toUpperCase().trim() : "U";

    const indexA = rankOrder.indexOf(rankA) === -1 ? rankOrder.length : rankOrder.indexOf(rankA);
    const indexB = rankOrder.indexOf(rankB) === -1 ? rankOrder.length : rankOrder.indexOf(rankB);

    if (indexA !== indexB) return indexA - indexB;
    return a["Title of your proposal"].localeCompare(b["Title of your proposal"]);
  };

  // Separate and sort talks and posters
  const talks = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Talk")
    .sort(sortByRank);

  const posters = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Poster")
    .sort((a, b) => a["Title of your proposal"].localeCompare(b["Title of your proposal"]));

  // Component for listing proposals
  const ProposalList = ({ data }) => (
    <ul className="space-y-4">
      {data.map((item, i) => (
        <li key={i} className="pb-3 border-b border-gray-300">
          <div className="font-semibold text-gray-900 text-lg">
            {item["Title of your proposal"]}
          </div>
          <div className="text-sm text-gray-700 mt-1 capitalize">
            {item["Name of the presenter"]}
          </div>
          {item["Rank"] && (
            <div className="text-sm text-gray-500 mt-1 italic">
              Rank: {item["Rank"]}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // Main JSX output
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

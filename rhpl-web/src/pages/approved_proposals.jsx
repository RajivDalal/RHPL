import proposals from '../data/proposal_data.js';

const Approved_proposals = () => {
  const rankOrder = { "A*": 1, "A": 2, "B": 3, "N": 4, "U": 5, "": 6 };

  const talks = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Talk")
    .sort((a, b) => {
      const rankA = rankOrder[a["Rank"]] || 6;
      const rankB = rankOrder[b["Rank"]] || 6;
      if (rankA !== rankB) return rankA - rankB;
      return a["Title of your proposal"].localeCompare(b["Title of your proposal"]);
    });

  const posters = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Poster")
    .sort((a, b) => a["Title of your proposal"].localeCompare(b["Title of your proposal"]));

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
      <div className="py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Accepted Talks</h2>
        <hr className="border-black pb-6" />
        <ProposalList data={talks} />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-2">Accepted Posters</h2>
        <hr className="border-black pb-6" />
        <ProposalList data={posters} />
      </div>
    </div>
  );
};

export default Approved_proposals;

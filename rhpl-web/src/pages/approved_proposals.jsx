import proposals from '../data/proposal_data.js';

const Approved_proposals = () => {
  // Define rank group priorities
  const rankGroup = {
    "A*": 1,
    "A": 1,
    "B": 2,
    "N": 2,
    "U": 3
  };

  // Helper function to extract last name
  const getLastName = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1].toLowerCase();
  };

  // Sort function by grouped rank, then alphabetically by last name
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

  return (
    <div className="content">
      
      <p className="py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 pb-6">Accepted Talks and Posters</h1>
        
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

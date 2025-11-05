import  proposals  from '../data/proposal_data.js';
const Approved_proposals = () => {
  const talks = proposals
    .filter((p) => p["Select an appropriate category for your proposal"] === "Talk")
    .sort((a, b) => a["Title of your proposal"].localeCompare(b["Title of your proposal"]));

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
          <div className="text-sm text-gray-700 mt-1">
            {item["Name of the presenter"]} — {item["Affiliation"]}
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="content">
      <p className="py-10">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Accepted Talks</h2>
      <ProposalList data={talks} />

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Accepted Posters</h2>
      <ProposalList data={posters} />
      </p>
    </div>);
};

export default Approved_proposals;
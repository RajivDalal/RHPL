import {NavLink, Link} from 'react-router-dom';

const Submit_proposal = () => {
  return (
    <div className="content">
      <p className="py-10 space-y-2">
        
       <h1 className="text-[27px] font-bold">Submit a proposal</h1>
        
       <hr className="border-black pb-4"/>
        
        <div>We invite proposals for:</div>

        <ul className="space-y-1 list-disc ml-7">
          <li>
            Talks: based on recent work that has been published in reputed venues, or is mature in terms of approach and evaluation;
          </li>
          <li>
            Posters: based on early ideas that are promising but have not been developed fully. Selections of these proposals will be made based on the promise of research possibilities and their novelty.
          </li>
        </ul>

        <div>Each proposal can be based on one or more works, published or unpublished.</div>

        <div>Proposals to the workshop may be submitted using the Google form below:</div>

        <div className="paraLink"><a className="underline" href="https://forms.gle/RufuAs54zxsadp1n7">Proposal submission to RHPL 2025</a></div>

        <div>Please see <Link to="/" className="underline hover:#14248a">here</Link> for the submission topics, and <Link to="/important_dates" className="underline hover:#14248a">here</Link> for the submission deadline and other important dates.</div>
      </p>
    </div>
  );
};

export default Submit_proposal;

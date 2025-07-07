
const Home = () => {
  return (
    <div className="content">
      
      <p className="py-10 space-y-2">

      <h1 className="text-[27px] font-bold">About the Workshop</h1>
      
      <hr className="border-black pb-4"/>

        <div className="paraLink">The <a className="underline" href="https://www.iarcs.org.in/">Indian Association for Research in Computing Science (IARCS)</a> is pleased to announce the fourth edition of the Workshop on Research Highlights in Programming Languages (RHPL). The workshop will be co-located with <a href="https://www.fsttcs.org.in/2025/"><span className="underline">FSTTCS 2025</span>.</a></div>
 
        <div>The focus of the workshop will be on all areas of Programming Languages (PL), including but not limited to:
        </div>

        <ul className="space-y-1 list-disc ml-7">
          <li>
            Program analysis and verification
          </li>
          <li>
            Applied formal methods
          </li>
          <li>
            Compilers
          </li>
          <li>
            Automated and interactive theorem provers
          </li>
          <li>
            Concurrency and memory models
          </li>
          <li>
            Domain and type theories
          </li>          
          <li>
            Program sketching, synthesis and repair
          </li>
          <li>
            Programming language design and semantics
          </li>
          {/* <li>
            Probabilistic reasoning<br/>
          </li> */}
        </ul>

        <div>Further, in view of the increasing role of AI in PL theory and practice, the workshop also includes in its scope the influence of AI tools and concepts on the above mentioned PL themes, as well as the impact of PL on the advancement of AI/ML, for instance via Probabilistic Programming Languages.</div>

        <div className="paraLink">We invite talk and poster proposals to the workshop. Please see <a href="/submit_proposal" className="underline">here</a> for more details on submitting proposals.</div>

        <div>The objective of RHPL is to foster interactions between the attendees of the workshop, and more broadly between researchers working on Programming Languages and the traditional FSTTCS community of researchers working on Theoretical Computer Science and Formal Methods. In the long term, we hope that RHPL will evolve into a regular conference or a track integrated with the FSTTCS conference.</div>
      </p>
    </div>
  )
};

export default Home;
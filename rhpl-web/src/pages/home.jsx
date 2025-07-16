
const Home = () => {
  return (
    <div className="content">
      
      <p className="py-10 space-y-2">

      <h1 className="text-[27px] font-bold">About the Workshop</h1>
      
      <hr className="border-black pb-4"/>

        <div className="paraLink">The <a className="underline" href="https://www.iarcs.org.in/">Indian Association for Research in Computing Science (IARCS)</a> is pleased to announce the fourth edition of the Workshop on Research Highlights in Programming Languages (RHPL). The workshop is organized by IARCS in association with <a className="underline" href="https://india.acm.org/">ACM India</a>, and will be co-located with <a href="https://www.fsttcs.org.in/2025/"><span className="underline">FSTTCS 2025</span>.</a></div>
 
        <div>The focus of the workshop will be on all areas of Programming Languages (PL), including but not limited to:
        </div>

        <ul className="space-y-1 list-disc ml-7">
          <li>
            Applied formal methods
          </li>
          <li>
            Automated and interactive theorem provers
          </li>
          <li>
            Compilers
          </li>
          <li>
            Concurrency and memory models
          </li>
          <li>
            Domain and type theories
          </li>
          <li>
            Program analysis and verification
          </li>
          <li>
            Program sketching, synthesis and repair
          </li>
          <li>
            Programming language design and semantics
          </li>
          {/*  <li>
            Programming language semantics
          </li>
          <li>
            Programming language education
          </li>          
           <li>
            Probabilistic reasoning<br/>
          </li> */}
        </ul>

        <div>Further, in view of the increasing role of Artificial Intelligence (AI) and Machine Learning (ML) in PL theory and practice, the workshop also includes in its scope themes pertaining to the influences of AI/ML concepts and tools on the mentioned PL topics, and vice-versa; for instance, probabilistic programming languages. </div>


        <div className="paraLink">We invite talk and poster proposals to the workshop. Please see <a href="/submit_proposal" className="underline">here</a> for more details on submitting proposals.</div>

        <div>The objective of RHPL is to foster interactions between the attendees of the workshop, and more broadly between researchers working on Programming Languages and the traditional FSTTCS community of researchers working on Theoretical Computer Science and Formal Methods. In the long term, we hope that RHPL will evolve into a regular conference or a track integrated with the FSTTCS conference.</div>
      </p>
    </div>
  )
};

export default Home;

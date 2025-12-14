import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";
import Modal from "../components/modal.jsx";



const ProgrammeRow = ({ time, title, link }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#c2e0f4] p-3 rounded mb-2">
      <span className="sm:w-48 flex-shrink-0 text-left font-bold mb-1 sm:mb-0">
        {time}
      </span>

      <span className="flex-1 sm:pl-4 font-semibold">
        {link ? (
          <a
            href={link}
            className="underline text-blue-700 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </span>
    </div>
  );
};


const SessionHeader = ({ time, number, title, chair, location="D LT8", locationLink="https://www.google.com/maps/place/DLT-8/@15.392303,73.8816632,20.27z/data=!4m6!3m5!1s0x3bbfb900213155e7:0x7490dccaba396945!8m2!3d15.3924302!4d73.8824773!16s%2Fg%2F11lf2kbc2_?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=3758f64b-5d6d-4f9a-9a36-3c4278aac7e7" }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-[#c2e0f4] p-3 rounded mb-2">

      <span className="sm:w-48 flex-shrink-0 text-left font-bold mb-2 sm:mb-0">{time}</span>
      <div className="flex-1 sm:pl-4">
        <span className="font-bold">
          Session {number}: {title}
        </span>
        {chair && (
          <div className="mt-1">
            <span className="font-semibold">Chair:</span> {chair}
          </div>
        )}
        {location && (
          <div className="mt-1">
            <span className="font-semibold">Location:</span> <a href={locationLink} target="_blank" className="underline text-blue-700 hover:text-blue-900">{location} </a>
          </div>
        )}
      </div>
    </div>
  );
};

const PanelDiscussion = ({
  time,
  link = "#",
  name,
  location,
  locationLink
}) => {
  return (
    <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200 last:border-b-0">
      <span className="sm:w-48 flex-shrink-0 text-left text-sm sm:text-base mb-1 sm:mb-0">{time}</span>
      <div className="flex-1 sm:pl-4">
        {name && (
          <div className="italic mb-1">
            <a href={link} className="underline text-blue-700 hover:text-blue-900">
              {name}
            </a>
          </div>
        )}
        <div><b>Location:</b> <a href={locationLink} target="_blank" className="underline text-blue-700 hover:text-blue-900">{location}</a></div>
      </div>
    </div>
  );
};


// Expander
const Talk = ({
  time,
  presenterLink = "#",
  presenter,
  title,
  abstract = "abstract123",
  affiliation = "affiliation123",
  references = "reference123"
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col sm:flex-row py-2">
        <span className="sm:w-48 flex-shrink-0 text-left text-sm sm:text-base mb-1 sm:mb-0">
          {time}
        </span>

        <div className="flex-1 sm:pl-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            {presenter && (
              <div className="italic mb-1">
                <a
                  href={presenterLink}
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  {presenter}
                </a>
              </div>
            )}
            <div>{title}</div>
          </div>

          {abstract.trim() && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-block text-sm px-3 py-1 rounded border border-blue-600
                         text-blue-700 hover:bg-blue-600 hover:text-white transition"
            >
              {expanded ? "Hide Details" : "Show Details"}
            </button>
          )}
        </div>
      </div>

      <div
        className={`
          ml-0 sm:ml-48 mb-3 overflow-hidden transition-all duration-150 ease-in-out
          ${expanded ? "max-h-[1000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}
        `}
      >
        <div className="bg-blue-200 rounded-md p-3">

          <p className="text-gray-800 whitespace-pre-line space-y-3">
            <p><b>Affiliation</b>: {affiliation}</p>
            <p><b>Abstract</b>: {abstract}</p>
            <p className="space-y-2"><b>References</b>:<p>{references}</p></p>
          </p>
        </div>
      </div>

    </div>
  );
};


// Dialog box
// const Talk = ({
//   time,
//   presenterLink = "#",
//   presenter,
//   title,
//   abstract = "abstract",
//   affiliation = "",
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200 last:border-b-0">
//         <span className="sm:w-48 flex-shrink-0 text-left text-sm sm:text-base mb-1 sm:mb-0">
//           {time}
//         </span>

//         <div className="flex-1 sm:pl-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//           <div>
//             {presenter && (
//               <div className="italic mb-1">
//                 <a
//                   href={presenterLink}
//                   className="underline text-blue-700 hover:text-blue-900"
//                 >
//                   {presenter}
//                 </a>
//               </div>
//             )}
//             <div>{title}</div>
//           </div>

//           {abstract.trim() && (
//             <button
//               onClick={() => setOpen(true)}
//               className="inline-block text-sm px-3 py-1 rounded border border-blue-600
//                          text-blue-700 hover:bg-blue-600 hover:text-white transition"
//             >
//               View Abstract
//             </button>
//           )}
//         </div>
//       </div>

//       {/* MODAL */}
//       <Modal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         title={title}
//       >
//         <div className="text-sm text-gray-600 italic">
//           {presenter}
//           {affiliation && ` — ${affiliation}`}
//         </div>

//         <p className="whitespace-pre-line">{abstract}</p>
//       </Modal>
//     </>
//   );
// };

const Programme = () => {
  const [activeDay, setActiveDay] = useState("wednesday");

  const dayTabs = [
    { id: "wednesday", label: "Wednesday, 17th December" },
    { id: "thursday", label: "Thursday, 18th December" },
    { id: "friday", label: "Friday, 19th December" },
  ];


  return (
    <div className="content">
      <p className="contain py-10 space-y-2">
        <h1 className="text-[27px] font-bold">Programme</h1>
        <hr className="border-black pb-4" />

        <Tabs tabs={dayTabs} activeTab={activeDay} setActiveTab={setActiveDay} />

        <div className="pt-5">
        {/* WEDNESDAY PROGRAMME */}
        {activeDay === "wednesday" && (
          <div>
            <ProgrammeRow
              time="09:00 - 10:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />
           

            <ProgrammeRow
              time="10:00 - 10:30"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 - 12:35"
              number={1}
              title="Concurrency"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 - 10:55"
                presenter="Nobuko Yoshida"
                title="Specification-guided Programming for Asynchronous Message-Passing Optimisation"
                presenterLink="https://mrg.cs.ox.ac.uk/"
              />
              <Talk
                time="10:55 - 11:20"
                presenter="Omkar Tuppe"
                title="GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency"
                presenterLink="https://homepages.iitb.ac.in/~194050003/"
                affiliation="Indian Institute of Technology Bombay"
                abstract="Modern GPUs adopt weak memory concurrency for performance, but their added complexity, including memory orders, memory scopes, and divergence, makes writing correct concurrent code significantly more complicated than on CPUs.\nTo address this, we developed GPUMC, a stateless model checker for verifying GPU programs under the scoped-RC11 memory model. GPUMC systematically explores all possible executions to detect data races, heterogeneous races, barrier divergence, and assertion violations.\nWe evaluated GPUMC on both micro-benchmarks and GPU kernels. It is efficient in time and memory, verifying large programs where existing tools fail or time out."
                references="[1] Chakraborty, S., Krishna, S., Pavlogiannis, A., Tuppe, O. GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency. In: Piskac, R., Rakamari, Z. (eds) Computer Aided Verification. CAV 2025. Lecture Notes in Computer Science, vol 15933. Springer, Cham. https://doi.org/10.1007/978-3-031-98682-6_17"
              />
              <Talk
                time="11:20 - 11:35"
                presenter="Soumodev Mal"
                title="Bridging Nets-within-Nets and Data Nets"
                presenterLink="https://www.linkedin.com/in/soumodev-mal-10329b185/"
              />
            </div>

            <SessionHeader
              time="11:45 - 12:35"
              number={2}
              title="Learning and Verification with Partial Information"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="11:45 - 12:10"
                presenter="Sreejith A V"
                title="Learning Deterministic One-Counter Automata in Polynomial Time"
                presenterLink="https://sreejithavtvm.github.io/"
              />
              <Talk
                time="12:10 - 12:35"
                presenter="Gourav Takhar"
                title="Verification of Open Programs via LLM-Mined Behavioral Idioms"
                presenterLink="https://tgourav.github.io/"
              />
            </div>

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 - 15:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />

            <ProgrammeRow
              time="15:00 - 15:30"
              title="Coffee Break"
            />

            <SessionHeader
              time="15:30 - 16:20"
              number={3}
              title="Markov Decision Processes"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="15:30 - 15:55"
                presenter=" Shibashis Guha"
                title="Continuous Time Reward Machines"
                presenterLink="https://www.tifr.res.in/~shibashis.guha/"
              />
              <Talk
                time="15:55 - 16:20"
                presenter="Ramneet Singh"
                title="INTERLEAVE: A Faster Symbolic Algorithm for Maximal End Component Decomposition"
                presenterLink="https://ramneet-singh.netlify.app/"
              />
            </div>

            <SessionHeader
              time="16:30 - 17:30"
              number={4}
              title="Cyber-Physical Systems"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="16:30 - 16:45"
                presenter="Anand Yeolekar"
                title="Repairing Control Safety Violations by Patching the Real-time OS Scheduler"
                presenterLink="https://ieeexplore.ieee.org/author/38232933600"
              />
              <Talk
                time="16:45 - 17:00"
                presenter="Santonu Sarkar"
                title="LLM-Assisted Formal Verification Framework for Process Control Software Evolution"
                presenterLink="https://www.bits-pilani.ac.in/goa/santonu-sarkar/"
              />
              <Talk
                time="17:00 - 17:15"
                presenter="Atanu Kundu"
                title="Data-Driven Falsification of Cyber-Physical Systems"
                presenterLink="https://atanucs.github.io/"
              />
              <Talk
                time="17:15 - 17:30"
                presenter="Alvin A. George"
                title="CEGAR for Temporal Properties based on Recurrent Sets"
                presenterLink="https://ieeexplore.ieee.org/author/37088487403"
              />
              
            </div>

            
          </div>
        )}

        {/* THURSDAY PROGRAMME */}
        {activeDay === "thursday" && (
          <div>
            <ProgrammeRow
              time="09:00 - 10:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />
            <ProgrammeRow
              time="10:00 - 10:30"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 - 11:35"
              number={1}
              title="Program Equivalence and Ownership Semantics"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 - 10:55"
                presenter="Umang Mathur"
                title="Equivalences for Causal Concurrency"
                presenterLink="https://www.comp.nus.edu.sg/~umathur/"
              />
              <Talk
                time="10:55 - 11:20"
                presenter="S. VenkataKeerthy"
                title="VEXIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity"
                presenterLink="https://svkeerthy.github.io/"
              />
              <Talk
                time="11:20 - 11:35"
                presenter="Siddharth Priya"
                title="Ownership in Low-Level Intermediate Representation"
                presenterLink="https://priyasiddharth.github.io/"
              />
            </div>

            <SessionHeader
              time="11:45 - 12:40"
              number={2}
              title="Compilers"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="11:45 - 12:10"
                presenter="Aditya Anand"
                title="CoSSJIT: Combining Static Analysis and Speculation in JIT Compilers"
                presenterLink="https://adityaanand7.github.io"
              />
              <Talk
                time="12:10 - 12:25"
                presenter="Supriya Bhide"
                title="CoS-SSA: Context-Sensitive SSA for Interprocedural Program Analyses and Optimisations"
                presenterLink="https://supriya-bhide.github.io/"
              />
              <Talk
                time="12:25 - 12:40"
                presenter="Aniket Mishra"
                title="Mechanical Specification and Verification for Mitigating Timing-based Side Channel Leaks"
                presenterLink="https://satiscugcat.github.io/"
              />
            </div>

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 - 15:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />
  
            <ProgrammeRow
              time="15:00 - 15:30"
              title="Coffee Break"
            />
            <SessionHeader
              time="15:30 - 17:30"
              number={3}
              title="Blended Session of FSTTCS Track B and RHPL"
              chair="TBA"
            />
            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <PanelDiscussion
                time="15:30 - 16:30"
                name="FSTTCS Track B Talks"
                location="D LT7"
                locationLink="https://www.google.com/maps/place/DLT-7/@15.3922732,73.8808447,18.65z/data=!4m6!3m5!1s0x3bbfb9326fabe01f:0xba42b70f4942fbac!8m2!3d15.3924!4d73.882292!16s%2Fg%2F11vl1mhxv0?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=2c57ab92-b992-405a-b9d5-ed2b4124139c"
                link="https://www.fsttcs.org.in/2025/program.php"
              />
              <PanelDiscussion
                time="16:30 - 17:30"
                name="RHPL Panel Discussion"
                location="TBA"
                link="/rhpl2025/panel_discussion"
              />
            </div>
          </div>
        )}

        {/* FRIDAY PROGRAMME */}
        {activeDay === "friday" && (
          <div>
            <ProgrammeRow
              time="09:00 - 10:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />
        
            <ProgrammeRow
              time="10:00 - 10:30"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 - 11:15"
              number={1}
              title="Verification"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 - 10:45"
                presenter="Arpita Dutta"
                title="Incremental and Unbounded Loop Analysis"
                presenterLink="https://arpitad10j.wixsite.com/arpitad10j"
              />
              <Talk
                time="10:45 - 11:00"
                presenter="Mohammad Afzal"
                title="Confidence-aware local robustness verification of neural networks"
                presenterLink="https://www.linkedin.com/in/mohammad-afzal-b1a832125/"
              />
              <Talk
                time="11:00 - 11:15"
                presenter="Dr Varsha Jarali / Dr Shashi Kant Pandey"
                title="On The Dolev-Yao Model of Symmetric Cascade Protocol"
                presenterLink="https://www.linkedin.com/in/dr-varsha-jarali-086826238/"
              />
            </div>

            <ProgrammeRow
              time="11:30 - 12:40"
              title="Special session in honour of R. Venkatesh"
              link="/rhpl2025/special_session"
            />

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 - 15:00"
              title="FSTTCS Invited Talk"
              link = "https://www.fsttcs.org.in/2025/program.php"
            />


            <ProgrammeRow
              time="15:00 - 15:30"
              title="Coffee Break"
            />

            <SessionHeader
              time="15:30 - 16:10"
              number={3}
              title="Category Theory"
              chair="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="15:30 - 15:55"
                presenter="Sanjiva Prasad"
                title="TBA"
                presenterLink="https://www.cse.iitd.ernet.in/~sanjiva/"
              />
              <Talk
                time="15:55 - 16:10"
                presenter="Cristopher Mary Kouam"
                title="Emdash — A Dependently Typed Logical Framework for Computational Synthetic ω-Category Theory and Functorial Elaboration"
                presenterLink="#"
              />
            </div>

            <SessionHeader
              time="16:15 - 17:05"
              number={4}
              title="Short Talks"
              chair="TBA"
            />
            {/* <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time=""
                presenter=""
                title="TBA"
                presenterLink=""
              />
            </div> */}
            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="16:15 - 16:35"
                presenter="Pankaj Kumar Kalita"
                title="Program Synthesis Meets Visual What-Comes-Next Puzzles"
                presenterLink="https://pkalita595.github.io/"
              />
              <Talk
                time="16:35 - 16:55"
                presenter="Lipsy Gupta"
                title="Safety Verification of Anytime Perception based Cyber-Physical Systems"
                presenterLink="https://www.linkedin.com/in/lipsy-gupta-9b1929259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEZg55kBoT7SEiWxSkILBow%3D%3D"
              />
              <Talk
                time ="16:55 - 17:05"
                presenter="Abhishek De"
                title="A proofs vs programs correspondence for the epsilon calculus"
                presenterLink="https://sites.google.com/view/abhishekde"
              />
              {/* <Talk
                time="16:55 - 17:15"
                presenter="Soumik Kumar Basu"
                title="GSOHC: Global Synchronization Optimization in Heterogeneous Computing"
                presenterLink="https://soumikiith.github.io/"
              />
            </div>
             <SessionHeader
              time="17:30 - 18:20"
              number={4}
              title="Short Talks II"
              chair="TBA"
            />
            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="17:30 - 17:50"
                presenter="Darshana Das K"
                title="From Theory to Practice: Blackbox Testing in an Industrial Telecom Environment"
                presenterLink="https://www.linkedin.com/in/darshana-das-k-070134247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5WbFT%2FphR%2BCJUNqOnJzA5w%3D%3D"
              />
              <Talk
                time ="18:00 - 18:20"
                presenter="Sumit Lahiri"
                title="Almost correct invariants: synthesizing inductive invariants by fuzzing proofs"
                presenterLink="https://www.cse.iitk.ac.in/users/sumitl/"
              />
              <Talk
                time="18:20 - 18:30"
                presenter="Mir Md Sajid Sarwar"
                title="Exploring Inevitable Waypoints for Unsolvability Explanation in Hybrid Planning Problems"
                presenterLink="https://www.linkedin.com/in/sajid-sarwar-30873820?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPCs%2BzHxOSeKUIkItFVb4Mw%3D%3D"
              />*/}
            </div> 
          </div>
        )}
        </div>
      </p>
    </div>
  );
};

export default Programme;
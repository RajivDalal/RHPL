import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";


const ProgrammeRow = ({ time, title, link }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#c2e0f4] p-3 rounded mb-2">
      <span className="sm:w-48 flex-shrink-0 text-left font-medium mb-1 sm:mb-0">
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


const SessionHeader = ({ time, number, title, chair, location }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-[#c2e0f4] p-3 rounded mb-2">

      <span className="sm:w-48 flex-shrink-0 text-left font-medium mb-2 sm:mb-0">{time}</span>
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
            <span className="font-semibold">Location:</span> {location}
          </div>
        )}
      </div>
    </div>
  );
};

const Talk = ({
  time,
  presenterLink = "#",
  presenter,
  title,
  abstract = " ",
  affiliation = "",
}) => {
  return (
    <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200 last:border-b-0">
      <span className="sm:w-48 flex-shrink-0 text-left text-sm sm:text-base mb-1 sm:mb-0">{time}</span>
      <div className="flex-1 sm:pl-4">
        {presenter && (
          <div className="italic mb-1">
            <a href={presenterLink} className="underline text-blue-700 hover:text-blue-900">
              {presenter}
            </a>
          </div>
        )}
        <div>{title}</div>
      </div>
    </div>
  );
};

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
              location="TBA"
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
              />
              <Talk
                time="11:20 - 11:35"
                presenter="Soumodev Mal"
                title="Bridging Nets-within-Nets and Data Nets"
                presenterLink="https://www.linkedin.com/in/soumodev-mal-10329b185/"
              />
            </div>

            <SessionHeader
              time="11:45 - 12:35"
              number={2}
              title="Learning and Verification with Partial Information"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="11:45 - 12:10"
                presenter="Prince Mathew"
                title="Learning Deterministic One-Counter Automata in Polynomial Time"
                presenterLink="https://princemathew07.github.io/"
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
              location="TBA"
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
              location="TBA"
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
                presenterLink="https://www.linkedin.com/in/santonusarkar/?originalSubdomain=in"
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
              title="Program Equivalence and Neural Network Verification"
              chair="TBA"
              location="TBA"
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
                presenter="Mohammad Afzal"
                title="Confidence-aware local robustness verification of neural networks"
                presenterLink="https://www.linkedin.com/in/mohammad-afzal-b1a832125/"
              />
            </div>

            <SessionHeader
              time="11:45 - 12:40"
              number={2}
              title="Compilers"
              chair="TBA"
              location="TBA"
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
            />
            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="15:30 - 16:30"
                presenter="FSTTCS Track B Talks"
                presenterLink="https://www.fsttcs.org.in/2025/program.php"
              />
              <Talk
                time="16:30 - 17:30"
                presenter="RHPL Panel Discussion"
                presenterLink="/panel_discussion"
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
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 - 10:45"
                presenter="Siddharth Priya"
                title="Ownership in Low-Level Intermediate Representation"
                presenterLink="https://priyasiddharth.github.io/"
              />
              <Talk
                time="10:45 - 11:00"
                presenter="Dr Varsha Jarali / Dr Shashi Kant Pandey"
                title="On The Dolev-Yao Model of Symmetric Cascade Protocol"
                presenterLink="https://www.linkedin.com/in/dr-varsha-jarali-086826238/"
              />
              <Talk
                time="11:00 - 11:15"
                presenter="Arpita Dutta"
                title="Incremental and Unbounded Loop Analysis"
                presenterLink="https://arpitad10j.wixsite.com/arpitad10j"
              />
            </div>

            <ProgrammeRow
              time="11:30 - 12:40"
              title="Special session in honour of R. Venkatesh"
              link="/special_session"
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
              location="TBA"
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
              time="16:15 - 17:00"
              number={4}
              title="Short Talks I"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="16:15 - 16:30"
                presenter="Pankaj Kumar Kalita"
                title="Program Synthesis Meets Visual What-Comes-Next Puzzles"
                presenterLink="https://pkalita595.github.io/"
              />
              <Talk
                time="16:30 - 16:45"
                presenter="Lipsy Gupta"
                title="Safety Verification of Anytime Perception based Cyber-Physical Systems"
                presenterLink="https://www.linkedin.com/in/lipsy-gupta-9b1929259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEZg55kBoT7SEiWxSkILBow%3D%3D"
              />
              <Talk
                time="16:45 - 17:00"
                presenter="Soumik Kumar Basu"
                title="GSOHC: Global Synchronization Optimization in Heterogeneous Computing"
                presenterLink="https://soumikiith.github.io/"
              />
            </div>
             <SessionHeader
              time="17:15 - 18:05"
              number={4}
              title="Short Talks II"
              chair="TBA"
              location="TBA"
            />
            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="17:15 - 17:30"
                presenter="Darshana Das K"
                title="From Theory to Practice: Blackbox Testing in an Industrial Telecom Environment"
                presenterLink="https://www.linkedin.com/in/darshana-das-k-070134247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5WbFT%2FphR%2BCJUNqOnJzA5w%3D%3D"
              />
              <Talk
                time ="17:30 - 17:40"
                presenter="Abhishek De"
                title="A proofs vs programs correspondence for the epsilon calculus"
                presenterLink="https://sites.google.com/view/abhishekde"
              />
              <Talk
                time ="17:40 - 17:55"
                presenter="Sumit Lahiri"
                title="Almost correct invariants: synthesizing inductive invariants by fuzzing proofs"
                presenterLink="https://www.cse.iitk.ac.in/users/sumitl/"
              />
              <Talk
                time="17:55 - 18:05"
                presenter="Mir Md Sajid Sarwar"
                title="Exploring Inevitable Waypoints for Unsolvability Explanation in Hybrid Planning Problems"
                presenterLink="https://www.linkedin.com/in/sajid-sarwar-30873820?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPCs%2BzHxOSeKUIkItFVb4Mw%3D%3D"
              />
            </div>
          </div>
        )}
        </div>
      </p>
    </div>
  );
};

export default Programme;
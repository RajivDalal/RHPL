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


const SessionHeader = ({ time, number, title, chair, link, location="D LT8", locationLink="https://www.google.com/maps/place/DLT-8/@15.392303,73.8816632,20.27z/data=!4m6!3m5!1s0x3bbfb900213155e7:0x7490dccaba396945!8m2!3d15.3924302!4d73.8824773!16s%2Fg%2F11lf2kbc2_?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=3758f64b-5d6d-4f9a-9a36-3c4278aac7e7" }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-[#c2e0f4] p-3 rounded mb-2">

      <span className="sm:w-48 flex-shrink-0 text-left font-bold mb-2 sm:mb-0">{time}</span>
      <div className="flex-1 sm:pl-4">
        <span className="font-bold">
          Session {number}: {link ? (
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

const InvitedTalk = ({ time,link, location="LT1", locationLink="https://www.google.com/maps/place/LT1,+Pilani,+Chicalim,+Sancoale,+Goa+403726/@15.3919527,73.8806161,18.84z/data=!4m6!3m5!1s0x3bbfb83658c6df71:0x151d38b27e3a9f08!8m2!3d15.3924175!4d73.8811191!16s%2Fg%2F1hjh1h5hb?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=ffd1fb62-4646-476b-a967-be1e0cc67604" }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-[#c2e0f4] p-3 rounded mb-2">

      <span className="sm:w-48 flex-shrink-0 text-left font-bold mb-2 sm:mb-0">{time}</span>
      <div className="flex-1 sm:pl-4">
        <span className="font-bold">
           
          <a
            href={link}
            className="underline text-blue-700 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
          FSTTCS Invited Talk
          </a>
        
        </span>
      
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
            <a href={link} target ="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">
              {name}
            </a>
          </div>
        )}
        <div><b>Location:</b> <a href={locationLink} target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">{location}</a></div>
      </div>
    </div>
  );
};


// Expander
/* const Talk = ({
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
}; */

// Expander
const Talk = ({
  time,
  presenterLink = "#",
  presenter,
  title,
  abstract = "",
  affiliation = "",
  references = ""
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* HEADER */}
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

          {abstract?.trim() && (
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

      {/* EXPANDED CONTENT */}
      <div
        className={`
          ml-0 sm:ml-48 mb-3 overflow-hidden transition-all duration-200 ease-in-out
          ${
            expanded
              ? "max-h-[2000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-1"
          }
        `}
      >
        <div className="bg-[#cce5f6] rounded-md p-4 space-y-4 text-gray-800">
          {/*prev color c2e0f4 */}
          {/* AFFILIATION */}
          {affiliation && (
            <div>
              <span className="font-semibold">Affiliation:</span>{" "}
              {affiliation}
            </div>
          )}

          {/* ABSTRACT */}
          {abstract && (
            <div>
              <div className="font-semibold mb-1">Abstract:</div>

              {abstract.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`text-justify leading-relaxed mb-3 ${
                    i === 0 ? "" : "indent-8"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* REFERENCES */}
          {references && (
            <div>
              <div className="font-semibold mb-1">References:</div>
              <div className="whitespace-pre-line leading-relaxed">
                {references}
              </div>
            </div>
          )}

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
            <InvitedTalk
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
                title="Specification-Guided Programming for Asynchronous Message-Passing Optimisation"
                presenterLink="https://mrg.cs.ox.ac.uk/"
                affiliation="University of Oxford"
                abstract={`Rust is a modern systems language focused on performance and reliability. Complementing Rust's promise to provide "fearless concurrency", developers frequently exploit asynchronous message passing. Unfortunately, sending and receiving messages in an arbitrary order to maximise computation-communication overlap (a popular optimisation in message-passing applications) opens up a Pandora's box of subtle concurrency bugs. To guarantee deadlock-freedom by construction, we present Rumpsteak: a new Rust framework based on multiparty session types. Previous session type implementations in Rust are either built upon synchronous and blocking communication and/or are limited to two-party interactions. Crucially, none support the arbitrary ordering of messages for efficiency. Rumpsteak instead targets asynchronous async/await code. Its unique ability is allowing developers to arbitrarily order send/receive messages while preserving deadlock-freedom. For this, Rumpsteak incorporates two recent advanced session type theories: (1) k-multiparty compatibility (k-MC), which globally verifies the safety of a set of participants, and (2) asynchronous multiparty session subtyping, which locally verifies optimisations in the context of a single participant. Specifically, we propose a novel algorithm for asynchronous subtyping that is both sound and decidable. We first talk about Rumsteak and show the new algorithm. We then talk about evaluations against other Rust implementations and asynchronous verification tools.`}
                references="[1] Martin Vassor and Nobuko Yoshida. Refinements for Multiparty Message-Passing Protocols: Specification-Agnostic Theory and Implementation. In 38th European Conference on Object-Oriented Programming (ECOOP 2024). Leibniz International Proceedings in Informatics (LIPIcs), Volume 313, pp. 41:1-41:29, Schloss Dagstuhl - Leibniz-Zentrum für Informatik (2024) https://doi.org/10.4230/LIPIcs.ECOOP.2024.41"
              />
              <Talk
                time="10:55 - 11:20"
                presenter="Omkar Tuppe"
                title="GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency"
                presenterLink="https://homepages.iitb.ac.in/~194050003/"
                affiliation="Indian Institute of Technology Bombay"
                abstract="Modern GPUs adopt weak memory concurrency for performance, but their added complexity, including memory orders, memory scopes, and divergence, makes writing correct concurrent code significantly more complicated than on CPUs.To address this, we developed GPUMC, a stateless model checker for verifying GPU programs under the scoped-RC11 memory model. GPUMC systematically explores all possible executions to detect data races, heterogeneous races, barrier divergence, and assertion violations.We evaluated GPUMC on both micro-benchmarks and GPU kernels. It is efficient in time and memory, verifying large programs where existing tools fail or time out."
                references="[1] Chakraborty, S., Krishna, S., Pavlogiannis, A., Tuppe, O. GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency. In: Piskac, R., Rakamari, Z. (eds) Computer Aided Verification. CAV 2025. Lecture Notes in Computer Science, vol 15933. Springer, Cham. https://doi.org/10.1007/978-3-031-98682-6_17"
              />
              <Talk
                time="11:20 - 11:35"
                presenter="Soumodev Mal"
                title="Bridging Nets-within-Nets and Data Nets"
                presenterLink="https://www.linkedin.com/in/soumodev-mal-10329b185/"
                affiliation="Indian Institute of Technology Dharwad, India"
                abstract="Elementary Object Systems (EOSs) are a model in the nets-within-nets (NWNs) paradigm, where tokens in turn can host standard Petri nets. We study the complexity of the reachability problem of EOSs when subjected to non-deterministic token losses. It is known that this problem is equivalent to the coverability problem with no lossiness of conservative EOSs (cEOSs).We precisely characterize cEOS coverability into the framework of data nets, whose tokens carry data from an infinite domain. Specifically, we show that cEOS coverability is equivalent to the coverability of an interesting fragment of data nets that extends beyond nu-PN (featuring globally fresh name creation), yet remains less expressive than Unordered Data Nets (featuring lossy name creation as well as powerful forms of whole-place operations and broadcasts).This insight bridges two apparently orthogonal approaches to PN extensions, namely data nets and NWNs. At the same time, it enables us to analyze cEOS coverability taking advantage of known results on data nets.As a byproduct, we immediately get that the complexity of cEOS coverability lies between F_{ω²} and F_{ω^ω},  two classes beyond Primitive Recursive"
                references="[1] Di Cosmo, F., Mal, S., Prince, T. (2026). Nets-Within-Nets Through the Lens of Data Nets. In: Ganty, P., Mansutti, A. (eds) Reachability Problems. RP 2025. Lecture Notes in Computer Science, vol 16230. Springer, Cham. https://doi.org/10.1007/978-3-032-09524-4_11"
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
                affiliation="IIT Goa"
                abstract="We present OL*, a polynomial-time algorithm for active learning of deterministic one-counter automata (DOCA). Unlike previous exponential-time syntactic approaches, OL* is semantic - it learns the language of the target automaton without any knowledge of the DOCA structure. It can also be used to approximate DOCA minimisation, a problem whose exact version is NP-hard even for certain subclasses of DOCA."
                references={`[1] Mathew, Prince, Vincent Penelle, and A. V. Sreejith. Learning Deterministic One-Counter Automata in Polynomial Time. arXiv preprint arXiv:2503.04525 (2025).`}

              />
              <Talk
                time="12:10 - 12:35"
                presenter="Gourav Takhar"
                title="Verification of Open Programs via LLM-Mined Behavioral Idioms"
                presenterLink="https://tgourav.github.io/"
                affiliation="IIT Kanpur"
                abstract="Incomplete or open programs—where portions of the source code are unavailable—are common in real-world software verification. Conventional verification tools assume the worst-case behavior for missing components, often producing a large number of spurious warnings. Engineers must therefore manually construct models or mocks for unavailable code, which is both time-consuming and error-prone, and inaccuracies in these mocks can compromise verification soundness. We present a technique that significantly improves the precision of memory-safety verification for incomplete programs by leveraging large language models (LLMs). Our approach mines idiomatic buffer-manipulation patterns from real code bases using an LLM, and then employs a property-directed synthesis strategy to select and adapt these patterns into angelic assumptions—assumptions that reflect the most favourable outcomes consistent with safe program behaviour. These assumptions enable the verifier to differentiate genuine bugs from false positives with high accuracy. We implement this technique in Seeker, a verification framework that declares a program correct only when it can be proven safe under a well-defined set of trusted idioms. Across benchmarks from widely used open-source projects, Seeker identifies 79% of false positives with zero false negatives, greatly reducing manual effort in verifying incomplete programs."
                references="[1] Gourav Takhar, Baldip Bijlani, Prantik Chatterjee, Akash Lal, and Subhajit Roy. 2025. Memory-Safety Verification of Open Programs with Angelic Assumptions. Proc. ACM Program. Lang. 9, OOPSLA2, Article 312 (October 2025), 29 pages. https://doi.org/10.1145/3763090"
              />
            </div>

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch"
            />

            <InvitedTalk
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
                affiliation="Tata Institute of Fundamental Research Mumbai"
                abstract="Reinforcement Learning (RL) is a sampling-based method for sequential decision-making, in which a learning agent iteratively converges toward an optimal policy by leveraging feedback from the environment in the form of scalar reward signals. While timing information is often abstracted in discrete-time domains, time-critical learning applications—such as queuing systems, population processes, and manufacturing systems—are naturally modeled as Continuous-Time Markov Decision Processes (CTMDPs). Since the seminal work of Bradtke and Duff, model-free RL for CTMDPs has become well-understood. However, in many practical applications, practitioners possess high-quality information about system rates derived from traditional queuing theory, which learning agents could potentially exploit to accelerate convergence. Despite this, classical RL algorithms for CTMDPs typically re-learn these parameters through sampling. In this work, we propose continuous-time reward machines (CTRMs), a novel framework that embeds reward functions and real-time state-action dynamics into a unified structure. CTRMs enable RL agents to effectively navigate dense-time environments while leveraging reward shaping and counterfactual experiences for accelerated learning. Our empirical results demonstrate CTRMs' ability to improve learning efficiency in time-critical environments."
                references="[1] Amin Falah, Shibashis Guha, Ashutosh Trivedi. Continuous-Time Reward Machines. In Proc. of the International Joint Conference on Artificial Intelligence (IJCAI) 2025, pp. 5056-5064, 2025"
              />
              <Talk
                time="15:55 - 16:20"
                presenter="Ramneet Singh"
                title="INTERLEAVE: A Faster Symbolic Algorithm for Maximal End Component Decomposition"
                presenterLink="https://ramneet-singh.netlify.app/"
                affiliation="Microsoft Research"
                abstract="The talk presents a novel symbolic algorithm for the Maximal End Component (MEC) decomposition of a Markov Decision Process (MDP). The key idea behind our algorithm INTERLEAVE is to interleave the computation of Strongly Connected Components (SCCs) with eager elimination of redundant state-action pairs, rather than performing these computations sequentially as done by existing state-of-the-art algorithms. Even though our approach has the same complexity as prior works, an empirical evaluation of INTERLEAVE on the standardized Quantitative Verification Benchmark Set demonstrates that it solves 19 more benchmarks (out of 379) than the closest previous algorithm. On the 149 benchmarks that prior approaches can solve, we demonstrate a 3.81x average speedup in runtime."
                references={`[1] Bansal, Suguman, and Ramneet Singh. "INTERLEAVE: A Faster Symbolic Algorithm for Maximal End Component Decomposition." International Conference on Computer Aided Verification. Cham: Springer Nature Switzerland, 2025.`}
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
                affiliation="TCS Research"
                abstract="Cyber-physical systems are typically implemented in software as a set of real-time control tasks. Timing uncertainty at the low-level scheduling layer can lead to deadline misses of control tasks, that affects control performance and may violate safety properties associated with the high-level control applications. We present a technique to detect and repair control safety violations by synthesizing a scheduler patch - a pre-computed list of jobs to be not scheduled at runtime - that eliminates these violations without the need of modifications at the control or task layer. The technique utilizes a guess-check-repair loop on top of an exact SMT encoding of control and scheduling behaviours, enabling efficient packing of multiple control applications on the execution platform while guaranteeing control safety. 
                
                
                The talk will cover SMT modeling of control applications, real-time tasks, and low-level timing uncertainties. Based  on exact modeling of the CPS layers, we present a way to repair the guessed scheduler patch, by refining the initial abstraction with constraints derived from counterexamples, that help distinguish critical task instances from the non-critical ones. 
                
                
                If time permits, we will present (published) work on repairing task specifications by automatically tuning selected task parameters like offset and period. These works broadly come under the field of Timing Debugging."
                references="[1] Anand Yeolekar, Supratik Chakraborty, R. Venkatesh, and Samarjit Chakraborty. 2025. Repairing Control Safety Violations via Scheduler Patch Synthesis. In Proceedings of the ACM/IEEE 16th International Conference on Cyber-Physical Systems (with CPS-IoT Week 2025) (ICCPS '25). Association for Computing Machinery, New York, NY, USA, Article 11, 1-12. https://doi.org/10.1145/3716550.3722035"
              />
              <Talk
                time="16:45 - 17:00"
                presenter="Santonu Sarkar"
                title="LLM-Assisted Formal Verification Framework for Process Control Software Evolution"
                presenterLink="https://www.bits-pilani.ac.in/goa/santonu-sarkar/"
                affiliation="BITS Goa"
                abstract="This proposal  presents a hybrid approach that combines the adaptability of Large Language Models (LLMs) with the rigor of formal verification for automated software upgrades for Sequential Function Chart (SFC) code. Our framework LLMA combines an LLM component to generate an upgraded version of an existing SFC code, while maintaining strict formal verification to ensure correctness during the upgrade process. Our framework includes: (1) an integrated approach combining formal verification with LLM-guided upgrades; (2) counterexample-driven prompt refinement for learning from verification failures; and (3) automated repair functions that rectify behavioral divergences identified during verification. Evaluations on industrial benchmarks reveal our approach achieves high success rates while substantially reducing manual effort compared to conventional methods"
                references="[1] Soumyadip Bandyopadhyay, Santonu Sarkar. Antarbhukti: Verifying Correctness of PLC Software During System Evolution. In Proc. of the International Symposium on Automated Technology for Verification and Analysis (ATVA) 2025, pp. 447 - 471, 2025."
              />
              <Talk
                time="17:00 - 17:15"
                presenter="Atanu Kundu"
                title="Data-Driven Falsification of Cyber-Physical Systems"
                presenterLink="https://atanucs.github.io/"
                affiliation="Indian Association for the Cultivation of Science"
                abstract="Cyber-Physical Systems (CPS) are abundant in safety-critical domains, including healthcare, avionics, and autonomous vehicles. Formal verification of their operational safety is, therefore, of utmost importance. In this talk, we discuss the falsification problem, where the focus is on searching for an unsafe execution in the system, rather than proving its absence. The algorithm leverages the inherent interpretability of Decision Trees for faster falsification of CPS. This is achieved by: (1) building a Decision Tree as a surrogate model of the CPS under test, and (2) a novel falsification algorithm guided by the explanations of safety violations of the CPS model extracted from its Decision Tree surrogate. Although the presented methodology is applicable to systems that can be executed/simulated in general, we demonstrate its effectiveness, particularly in CPS.  We demonstrate that our framework, implemented as the tool FlexiFal, can detect hard-to-find counterexamples in CPS that exhibit both linear and non-linear dynamics. Decision tree-guided falsification shows promising results in efficiently finding multiple counterexamples in the ARCH-COMP 2024 falsification benchmarks."
                references="[1] Atanu Kundu, Sauvik Gon, and Rajarshi Ray. 2024. Data-Driven Falsification of Cyber-Physical Systems. In Proceedings of the 17th Innovations in Software Engineering Conference (ISEC '24). Association for Computing Machinery, New York, NY, USA, Article 10, 1-5. https://doi.org/10.1145/3641399.3641401"
              />
              <Talk
                time="17:15 - 17:30"
                presenter="Alvin A. George"
                title="CEGAR for Temporal Properties based on Recurrent Sets"
                presenterLink="https://ieeexplore.ieee.org/author/37088487403"
                affiliation="Indian Institute of Science, Bangalore"
                abstract="We consider the problem of verifying linear-time temporal properties, specifically, liveness properties, of discrete-time systems with (uncountable) infinite states   often arising in robotic applications, And present a counter-example guided abstraction refinement (CEGAR) based technique tailored to this setting. We provide novel validation and refinement algorithms to handle the lasso shaped abstract counterexamples that witness the violation of the liveness properties and give a characterization of a feasible lasso-shaped abstract counter-examples based on the notion of recurrent sets.Using this, we propose an algorithm for validating counter-examples by iteratively computing pre-sets around the loop, and use these computed pre-sets to refine the   abstraction to eliminate spurious counter-examples. Preliminary results show the technique to be effective in terms of both proving that the system satisfies the given property, as well as in finding valid counter-examples (falsification)."
                references="[1] Alvin A. George, Deepak D'Souza, Pavithra Prabhakar. CEGAR-based Verification of Temporal Properties of Robotic Systems. Unpublished, 2025"
              />
              
            </div>

            
          </div>
        )}

        {/* THURSDAY PROGRAMME */}
        {activeDay === "thursday" && (
          <div>
            <InvitedTalk
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
                affiliaction="National University of Singapore"
                abstract="This talk will begin with a gentle introduction to trace theory, a principled mathematical framework for defining equivalence relations among concurrent program executions based on a commutativity relation over the atomic steps of individual program threads. Its simplicity, elegance, and algorithmic efficiency make it a powerful tool in various domains, including program verification and testing. I will then compare trace theory with the modern, widely adopted notion of equivalence for concurrent program executions, known as reads-from equivalence. This more natural and relaxed notion captures a broader range of behaviors but introduces significant computational challenges. Specifically, I will present results demonstrating the computational hardness associated with reads-from equivalence. Finally, I will discuss our recent efforts to generalize trace theory to reconcile it with reads-from equivalence. This generalized framework aims to retain the algorithmic advantages of trace theory while addressing its limitations in representing modern equivalence notions."
                references={`[1] Farzan, Azadeh, and Umang Mathur. "Coarser equivalences for causal concurrency." Proceedings of the ACM on Programming Languages 8.POPL (2024): 911-941. 
                [2] Ang, Zhendong, and Umang Mathur. "Predictive monitoring against pattern regular languages." Proceedings of the ACM on Programming Languages 8.POPL (2024): 2191-2225.
                [3] Ang, Zhendong, and Umang Mathur. "Predictive Monitoring with Strong Trace Prefixes." International Conference on Computer Aided Verification. Cham: Springer Nature Switzerland, 2024.`}
              />
              <Talk
                time="10:55 - 11:20"
                presenter="S. VenkataKeerthy"
                title="VEXIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity"
                presenterLink="https://svkeerthy.github.io/"
                affiliation="IIT Hyderabad"
                abstract="Binary similarity involves determining whether two binary programs exhibit similar functionality with applications in vulnerability detection, malware analysis, and copyright detection. However, variations in compiler settings, target architectures, and deliberate code obfuscations significantly complicate the similarity measurement by effectively altering the syntax, semantics, and structure of the underlying binary. To address these challenges, we propose VexIR2Vec, a robust, architecture-neutral approach based on VEX-IR to solve binary similarity tasks. VexIR2Vec consists of three key components: a peephole extractor, a normalization engine (VexINE), and an embedding model (VexNet). The process to build program embeddings starts with the extraction of sequences of basic blocks, or peepholes, from control-flow graphs via random walks, capturing structural information. These generated peepholes are then normalized using VexINE, which applies compiler-inspired transformations to reduce architectural and compiler-induced variations. Embeddings of peepholes are generated using representation learning techniques, avoiding Out-Of-Vocabulary (OOV) issues. These embeddings are then fine-tuned with VexNet, a feed-forward Siamese network that maps functions into a high dimensional space for diffing and searching tasks in an application-independent manner. We evaluate VexIR2Vec against five baselines BinDiff, DeepBinDiff, SAFE, BinFinder, and histograms of opcodes on a dataset comprising 2.7M functions and 15.5K binaries from 7 projects compiled across 12 compilers targeting x86 and ARM architectures. The experiments span four adversarial settings cross-optimization, cross-compilation, cross-architecture, and obfuscations that are typically exploited by malware and vulnerabilities. In diffing experiments, VexIR2Vec outperforms the nearest baseline in these four scenarios by 40%, 18%, 21%, and 60%, respectively. In the searching experiment, VexIR2Vec achieves a mean average precision of 0.76, the nearest baseline, by 46%. Our framework is highly scalable and is built as a lightweight, multi-threaded, parallel library using only open-source tools. VexIR2Vec is about 3.1-3.5x faster than the closest baselines and orders-of-magnitude faster than other tools."
                references="[1] S. VenkataKeerthy, Soumya Banerjee, Sayan Dey, Yashas Andaluri, Raghul PS, Subrahmanyam Kalyanasundaram, Fernando Magno Quintão Pereira, and Ramakrishna Upadrasta. 2025. VexIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity. ACM Trans. Softw. Eng. Methodol. March 2025. https://doi.org/10.1145/3721481"
              />
              <Talk
                time="11:20 - 11:35"
                presenter="Siddharth Priya"
                title="Ownership in Low-Level Intermediate Representation"
                presenterLink="https://priyasiddharth.github.io/"
                affiliation="University of Waterloo"
                abstract="Ownership helps high-level languages—and their verifiers—reason about memory correctness without modelling an explicit address map, but this advantage disappears in LLVM IR where ownership information is lost and verification must fall back on one. This talk introduces OSEA-IR, a low-level intermediate representation that restores ownership semantics using well-defined aliasing primitives and a pointer-resident cache, allowing verification conditions to avoid symbolic address maps whenever memory access is provably exclusive. Prophecy variables model the return of mutable borrows without shared-memory reasoning, keeping cache-based verification simple even across non-local aliasing patterns. OSEA-IR is generated from C-like programs that follow an ownership discipline via lightweight macros, and integrates with SEABMC, a bit-precise bounded model checker for LLVM. Across both handcrafted examples and real-world open-source C code, this approach yields 1.3x-5x improvements in SMT solving time, demonstrating that lifting ownership semantics into low-level IR substantially simplifies verification while supporting both safe and unsafe code paths."
                references="[1] Siddharth Priya, Arie Gurfinkel. Ownership in low-level intermediate representation. In Proc. of Formal Methods in Computer-Aided Design (FMCAD). IEEE, 2024."
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
                affiliation="Indian Institute of Technology Bombay"
                abstract="Just-in-time (JIT) compilers typically sacrifice the precision of program analysis for efficiency, but are capable of performing sophisticated speculative optimizations based on run-time profiles to generate code that is specialized to a given execution. On the contrary, ahead-of-time static compilers can often afford precise flow-sensitive interprocedural analysis, but produce conservative results in scenarios where higher precision could be derived from run-time specialization. In this work (published at OOPSLA-25), we propose the first-of-its-kind approach to enrich static analysis with the possibility of speculative optimization during JIT compilation, as well as its usage to perform aggressive stack allocation on a production Java Virtual Machine (JVM)."
                references={`[1] Aditya Anand, Vijay Sundaresan, Daryl Maier, and Manas Thakur. “CoSSJIT: Combining Static Analysis and Speculation in JIT Compilers”. In Proceedings of the ACM on Programming Languages (OOPSLA), Singapore, October 12-18, 2025.
                
                [2] Aditya Anand, Solai Adithya, Swapnil Rustagi, Priyam Seth, Vijay Sundaresan, Daryl Maier, V. Krishna Nandivada, and Manas Thakur. “Optimistic Stack Allocation and Dynamic Heapification for Managed Runtimes”. In Proceedings of the ACM on Programming Languages (PLDI), Copenhagen, Denmark, June 24-28, 2024.`}
              />
              <Talk
                time="12:10 - 12:25"
                presenter="Supriya Bhide"
                title="CoS-SSA: Context-Sensitive SSA for Interprocedural Program Analyses and Optimisations"
                presenterLink="https://supriya-bhide.github.io/"
                affiliation="Indian Institute of Technology Bombay"
                abstract="Static Single Assignment (SSA) is the most commonly used intermediate representation by all modern compilers. The advent of SSA in the late 80′s brought about a major change in how programs were represented, analyzed, and optimized by compilers. Since then, SSA has seen many advances and has become the de facto intermediate representation used by modern compilers such as GCC and LLVM. The main advantage of SSA is that it enables referential transparency for variables by ensuring that there is a single static definition of any variable and this definition is connected to its uses through def-use edges. This provides flow-sensitivity for free thereby enabling sparse analyses. Current SSA (aka classical SSA) works only at the intraprocedural level and is restricted to non-address taken variables. Address-taken variables and global variables are handled soundly but very imprecisely using memory-SSA. However, no def-use edges can be formed when the definitions and their uses are in different procedures. This restricts the scope of SSA-based analyses and optimisations to individual procedures. To overcome these limitations, we propose a precise interprocedural SSA form called CoS-SSA (Context-Sensitive SSA) that generalises the classical SSA to support def-use edges between global variables across procedures even in the presence of pointers and recursion. CoS-SSA provides context-sensitivity for free, apart from flow-sensitivity—a client analysis that uses CoS-SSA does not require to maintain context sensitivity or flow sensitivity. This enables efficient sparse analyses at the interprocedural level."
                references="[1] Supriya Bhide. CoS-SSA: Context-Sensitive SSA for Interprocedural Program Analyses and Optimisations. Unpublished, 2025"
              />
              <Talk
                time="12:25 - 12:40"
                presenter="Aniket Mishra"
                title="Mechanical Specification and Verification for Mitigating Timing-based Side Channel Leaks"
                presenterLink="https://satiscugcat.github.io/"
                affiliation="IIT Gandhinagar"
                abstract=" With the recent advent of exploits like Spectre and Meltdown, the mitigation of side-channel attacks has become an important concern for security researchers. In this paper, we focus on timing-based side channels introduced through conditional branching on secret information within programs. We introduce a language that allows a programmer to write conditionals branching on secrets within its syntax, but has a semantics that keeps execution time constant with respect to an adversary under an observationally equivalent memory. We differ from other approaches that use program analysis methods, opting instead to modify the operational semantics to enforce the necessary properties. We formalize the semantics for our language with timing leak mitigations in Rocq (previously, Coq) and prove that these semantics satisfy the property of timing-sensitive non-interference. This talk focuses on some of the benefits and limits of choosing to write these proofs mechanically."
                references={`[1] Mishra, Aniket, and Abhishek Bichhawat. "Fall-Through Semantics for Mitigating Timing-Based Side Channel Leaks." 45th IARCS Annual Conference on Foundations of Software Technology and Theoretical Computer Science (FSTTCS 2025). Schloss Dagstuhl-Leibniz-Zentrum für Informatik, 2025.`}
              />
            </div>

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch and RHPL Poster Session"
            />

            <InvitedTalk
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
              location=""
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
                locationLink="https://maps.google.com/?cid=2394156713201511468&entry=gps"
                location="TP Classroom"
                link="/rhpl2025/panel_discussion"
              />
            </div>
          </div>
        )}

        {/* FRIDAY PROGRAMME */}
        {activeDay === "friday" && (
          <div>
            <InvitedTalk
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
                affiliation="National University of Singapore, Singapore"
                abstract="We address the problem of proving a loop invariant property within a perpetual loop. We have two goals.  Our first goal is to prove the property holds at over all iterations, ie. to have unbounded verification.  Failing this, our subsequent goal is to determine a loop iteration bound where the property holds, ie. to have the best possible bounded verification. Our framework is set in a harness which is essentially a one loop program whose body comprises a bounded computation, for example, one that does not contain any loops. Our interpreter is based on iterative deepening; it performs bounded reasoning at each iteration, which increases the bound, and has two key features: incrementality, ie. it learns and exploits the result of the previous iteration, and induction, ie. it has a fixpoint-checking mechanism which can detect that the property is invariant throughout all iterations."
                references={`[1] Arpita Dutta, and Joxan Jaffar. "Incremental and Unbounded Loop Analysis." In Companion Proceedings of the 2025 ACM SIGPLAN International Conference on Systems, Programming, Languages, and Applications: Software for Humanity, pp. 46-47. 2025.`}
              />
              <Talk
                time="10:45 - 11:00"
                presenter="Mohammad Afzal"
                title="Confidence-aware local robustness verification of neural networks"
                presenterLink="https://www.linkedin.com/in/mohammad-afzal-b1a832125/"
                affiliation="TCS Pune India and IIT Bombay"
                abstract="Robustness is a important problem in AI alignment and safety, with models such as neural networks being increasingly used in safety-critical systems. In the last decade, a large body of work has emerged on local robustness, i.e., checking if the decision of a neural network remains unchanged when the input is slightly perturbed. However, many of these approaches require specialized encodings and often ignore the confidence of a neural network on its output. In this work, our goal is to build a generalised framework to specify and verify variants of robustness in neural network verification. We propose a specification framework using a simple grammar, which is flexible enough to capture most existing variants. This allows us to introduce new variants of robustness that take into account the confidence of the neural network in its outputs. Next, we develop a novel and powerful unified technique to verify all such variants in a homogenous way, viz., by adding a few additional layers to the neural network. This enables us to use any state-of-the-art neural network verification tool, without having to tinker with the encoding within, while incurring an approximation error that we show is bounded."
              />
              <Talk
                time="11:00 - 11:15"
                /* presenter="Dr Varsha Jarali / Dr Shashi Kant Pandey" */
                title="On The Dolev-Yao Model of Symmetric Cascade Protocol"
                /* presenterLink="https://www.linkedin.com/in/dr-varsha-jarali-086826238/" */
                presenter={
                <>
                  <a
                    href="https://www.linkedin.com/in/dr-varsha-jarali-086826238/"
                    className="underline text-blue-700 hover:text-blue-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Dr Varsha Jarali
                  </a>
                  {" / "}
                  <a
                    href="https://sites.google.com/site/priyeshashikant/"
                    className="underline text-blue-700 hover:text-blue-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Dr Shashi Kant Pandey
                   </a>
                </>
                }
                affiliation="Society For Electronic Transactions and Security Chennai"
                abstract="Security protocols enable authentication, key distribution, and secure information exchange, making them essential for network security, yet flaws in their design can lead to attacks. To prevent this, formal verification methods are vital for analyzing protocol correctness.The Dolev-Yao (DY) model introduced formalization of the security proof of name-stamp and cascade protocols, which relies on public-key encryption. Brook and Otto later distinguished between symmetric and non-symmetric cascade protocols, noting that all DY cases were symmetric and that attacker choices were not fully addressed. Full formal security proofs of these protocols based on the capability of an attacker and the choice of encryption remain to be done. In this work, we extend the DY formal model and analyze all remaining four cases for symmetric two-party cascade protocols. A formal proof of security is presented for all four protocols based on a hybrid choice of symmetric and asymmetric encryption."
                references="[1] Dolev, D., and Yao, A. C. On the security of public key protocols. Proceedings of the 22nd Annual Symposium on Foundations of Computer Science (FOCS), pp. 350-357, 1983.
                [2] Book, R. V., and Otto, F. The verifiability of two-party protocols. In Advances in Cryptology - EUROCRYPT '85, pp. 233-242. Springer."
              />
            </div>

            <SessionHeader
              time="11:30 - 12:40"
              number={2}
              title="Special session in honour of R. Venkatesh"
              chair="TBA"
              location="TP Classroom"
              locationLink="https://maps.google.com/?cid=2394156713201511468&entry=gps"
              link="/rhpl2025/special_session"
            />

            <ProgrammeRow
              time="12:40 - 14:00"
              title="Lunch"
            />

            <InvitedTalk
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
                affiliation=""
                abstract=""
              />
              <Talk
                time="15:55 - 16:10"
                presenter="Cristopher Mary Kouam"
                title="Emdash — A Dependently Typed Logical Framework for Computational Synthetic ω-Category Theory and Functorial Elaboration"
                presenterLink="#"
                affiliation="BITS Pilani"
                abstract={`We present Emdash, a novel dependently typed logical framework designed to support computational synthetic category theory, drawing inspiration from Kosta Dosen's functorial programming paradigm. Emdash integrates categorical primitives—such as categories, objects, morphisms, and functors—directly into its λΠ-calculus core, facilitating reasoning and computation in a style closer to mathematical practice.The path towards ω-categories is paved by internalizing the (dependent) comma category construction of a (dependent) category, similarly to the “bridge type” construction used in logical relations and parametricity. The system features a bidirectional type checker with unification-based hole solving for interactive proof, definitional equality via βδι-reduction (including user-supplied rewrite rules and unfolding of injective constants), and Higher-Order Abstract Syntax (HOAS) for binders. A key contribution of Emdash is the concept of functorial elaboration, where kernel-level constructors for structures such as functors not only receive their components (for example, object and arrow mappings) but also definitionally verify their coherence laws during elaboration, throwing a \`CoherenceError\` upon failure. Implemented in TypeScript and formally specified in a Lambdapi dialect, Emdash demonstrates a practical pathway from specification to a working kernel. We report on the successful implementation and validation of the system's core features through a comprehensive test suite.`}
                references="[1] Christopher Mary Kouam. Emdash — A Dependently Typed Logical Framework for Computational Synthetic Category Theory and Functorial Elaboration. Unpublished, 2025. Report available at: https://github.com/hotdocx/emdash"
              />
            </div>

            <SessionHeader
              time="16:15 - 17:05"
              number={4}
              title="Short Talks"
              chair="TBA"
              location="TBA"
              locationLink=""
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
                affiliation="IBM"
                abstract={`What-Comes-Next (WCN) puzzles challenge us to identify the next figure that "logically follows" a provided sequence of figures. WCN puzzles are a favorite of interviewers and examiners—there is hardly any aptitude test that misses WCN puzzles. In this work, we propose to automatically synthesize WCN puzzles. The key insight of our methodology is that the generation of WCN problems can be posed as a program synthesis problem. We design a small yet expressive language, PuzzlerLang, to capture solutions to WCN puzzles. PuzzlerLang is expressive enough to explain almost all human-generated WCN puzzles that we collected, and yet small enough to allow synthesis in a reasonable time. To ensure that the generated puzzles are appealing to humans, we infer a machine learning model to approximate the appeal factor of a given WCN puzzle. We use this model within our puzzle synthesizer as an optimization function to generate highly appealing and correct-by-construction WCN puzzles. We implemented our ideas in a tool, PuzzleGen. We found that PuzzleGen is fast, clocking an average time of about 3.4 seconds per puzzle. Further, statistical tests over responses from a user study show that PuzzleGen-generated puzzles are indistinguishable from puzzles created by humans.`}
                references="[1] Sumit Lahiri, Pankaj Kumar Kalita, Akshay Kumar Chittora, Varun Vankudre, and Subhajit Roy. 2024. Program Synthesis Meets Visual What-Comes-Next Puzzles. In Proceedings of the 39th IEEE/ACM International Conference on Automated Software Engineering (ASE '24). Association for Computing Machinery, New York, NY, USA, 418-429. https://doi.org/10.1145/3691620.3695015"

              />
              <Talk
                time="16:35 - 16:55"
                presenter="Lipsy Gupta"
                title="Safety Verification of Anytime Perception based Cyber-Physical Systems"
                presenterLink="https://www.linkedin.com/in/lipsy-gupta-9b1929259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEZg55kBoT7SEiWxSkILBow%3D%3D"
                affiliation="Kansas State University"
                abstract="AI-based components are increasingly integrated into autonomous and cyber-physical systems (CPS) by replacing traditional modules such as control, perception, and decision-making. These integrations have led to significant advancements in safety-critical domains, including aerospace, automotive, and robotics. The paradigm of anytime perception has been recently introduced to offer flexibility in latency and accuracy, unlike traditional sensors that return outputs with fixed performance. This adaptability enables autonomous systems to perform more complex tasks while ensuring efficient use of computational resources, but it also introduces new safety challenges, as variations in sensing performance can lead to mission-critical failures. To address these challenges, formal verification is emerging as a powerful framework for providing guarantees on the correctness and safety of such systems. In this talk, we focus on the safety verification of anytime perception-based CPS, wherein we model the anytime sensor in the closed loop. We provide an efficient algorithm for reachable set computation of a closed-loop system with an anytime sensor and a neural network controller using the star set data structure and designing new algorithms for some star set operations. We discuss some experimental results that highlight the scalability of the approach and its effectiveness with diverse dynamics, controllers, and sensing configurations."
                references={`[1] Gupta, L., and Prabhakar, P. Star-set based efficient reachable set computation of anytime sensing-based neural network-controlled dynamical systems. In Proceedings of the International Conference on Embedded Software (EMSOFT), 2025. Journal version published in ACM Transactions on Embedded Computing Systems.
                [2] Gupta, L., Choton, J. C., and Prabhakar, P. Safety verification of closed-loop control systems with anytime perception. In Proceedings of the International Conference on Robotics and Automation (ICRA), 2024.`}

              />
              <Talk
                time ="16:55 - 17:05"
                presenter="Abhishek De"
                title="A proofs vs programs correspondence for the epsilon calculus"
                presenterLink="https://sites.google.com/view/abhishekde"
                affiliation="Krea University"
                abstract={`The proofs vs programs (also known as the Curry-Howard correspondence) is a deep connection between logic and programming languages, where formulas correspond to types, proofs to programs, and normalization to evaluation. In the early 20th century, in order to solve the foundational crisis, Hilbert and Bernays invented the "epsilon-calculus", a logic obtained by adding a choice operator to predicate logic. Epsilon-calculus was largely forgotten in favour of first-order logic; however, there has been renewed interest in its proof theory in the last few decades. In this talk, we explore the proofs vs programs correspondence for the epsilon calculus. It turns out that epsilon calculus has some mild classical features, which give rise to computational effects at the level of programs. This is a work in progress with Bruno da Rocha Paiva.`}
              />
              {/* <Talk
                time="16:55 - 17:15"
                presenter="Soumik Kumar Basu"
                title="GSOHC: Global Synchronization Optimization in Heterogeneous Computing"
                presenterLink="https://soumikiith.github.io/"
                affiliation=""
                abstract=""
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
                affiliation=""
                abstract=""
              />
              <Talk
                time ="18:00 - 18:20"
                presenter="Sumit Lahiri"
                title="Almost correct invariants: synthesizing inductive invariants by fuzzing proofs"
                presenterLink="https://www.cse.iitk.ac.in/users/sumitl/"
                affiliation=""
                abstract=""
              />
              <Talk
                time="18:20 - 18:30"
                presenter="Mir Md Sajid Sarwar"
                title="Exploring Inevitable Waypoints for Unsolvability Explanation in Hybrid Planning Problems"
                presenterLink="https://www.linkedin.com/in/sajid-sarwar-30873820?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPCs%2BzHxOSeKUIkItFVb4Mw%3D%3D"
                affiliation=""
                abstract=""
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
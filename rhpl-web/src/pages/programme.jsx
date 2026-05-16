import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

// ─── TYPE STYLES ────────────────────────────────────────────────────────────

const typeStyles = {
  plenary: {
    card: "border-l-4",
    cardStyle: { background: "#dceefb", borderLeftColor: "#3b82f6" },
    titleColor: "text-blue-900",
    metaColor: "text-blue-600",
    badge: "bg-blue-100 text-blue-700 border border-blue-300",
    badgeLabel: "Plenary Talk",
    presenterColor: "text-blue-700",
    talkTitleColor: "text-blue-900",
    timeColor: "text-blue-400",
    expandBg: "bg-blue-50 border border-blue-200",
  },
  break: {
    card: "",
    cardStyle: { background: "#f3f4f6" },
    titleColor: "text-gray-400 italic font-normal",
    metaColor: "text-gray-400",
    badge: null,
    badgeLabel: null,
    presenterColor: "text-gray-500",
    talkTitleColor: "text-gray-600",
    timeColor: "text-gray-400",
    expandBg: "",
  },
  session: {
    card: "border-l-4",
    cardStyle: { background: "#f3e8ff", borderLeftColor: "#a855f7" },
    titleColor: "text-purple-900",
    metaColor: "text-purple-500",
    badge: "bg-purple-100 text-purple-700 border border-purple-300",
    badgeLabel: "Session",
    presenterColor: "text-purple-700",
    talkTitleColor: "text-purple-900",
    timeColor: "text-purple-400",
    expandBg: "bg-purple-50 border border-purple-200",
  },
  special: {
    card: "border-l-4",
    cardStyle: { background: "#fef3c7", borderLeftColor: "#f59e0b" },
    titleColor: "text-amber-900",
    metaColor: "text-amber-600",
    badge: "bg-amber-100 text-amber-700 border border-amber-300",
    badgeLabel: "Special Session",
    presenterColor: "text-amber-700",
    talkTitleColor: "text-amber-900",
    timeColor: "text-amber-400",
    expandBg: "bg-amber-50 border border-amber-200",
  },
  invited: {
    card: "border-l-4",
    cardStyle: { background: "#dcfce7", borderLeftColor: "#22c55e" },
    titleColor: "text-green-900",
    metaColor: "text-green-600",
    badge: "bg-green-100 text-green-700 border border-green-300",
    badgeLabel: "Invited Talk",
    presenterColor: "text-green-700",
    talkTitleColor: "text-green-900",
    timeColor: "text-green-400",
    expandBg: "bg-green-50 border border-green-200",
  },
};

// ─── EXPANDABLE TALK ROW ─────────────────────────────────────────────────────

const TalkRow = ({ talk, style }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = talk.abstract && talk.abstract.trim();

  return (
    <div
      className="text-xs border-t pt-2 first:border-t-0 first:pt-0"
      style={{ borderTopColor: "rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-start justify-between gap-1">
        <div className="flex-1">
          <div className={`font-mono mb-0.5 ${style.timeColor}`}>{talk.time}</div>
          {talk.presenter && (
            <div className={`italic mb-0.5 font-semibold ${style.presenterColor}`}>
              {typeof talk.presenter === "string" ? (
                talk.presenterLink && talk.presenterLink !== "#" ? (
                  <a
                    href={talk.presenterLink}
                    className="underline decoration-dotted hover:opacity-75"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {talk.presenter}
                  </a>
                ) : (
                  talk.presenter
                )
              ) : (
                talk.presenter
              )}
            </div>
          )}
          {talk.title && (
            <div className={style.talkTitleColor}>
              {talk.title}
              {talk.slidesLink && (
                <a
                  href={talk.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline opacity-50 hover:opacity-100 transition-opacity"
                >
                  [Slides]
                </a>
              )}
            </div>
          )}
        </div>
        {hasDetails && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="shrink-0 mt-0.5 opacity-40 hover:opacity-80 transition-opacity"
          >
            {expanded ? (
              <RiArrowUpSLine className="text-base" />
            ) : (
              <RiArrowDownSLine className="text-base" />
            )}
          </button>
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[60vh] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`rounded p-3 space-y-2 text-xs overflow-y-auto max-h-[60vh] ${style.expandBg}`}
        >
          {talk.affiliation && (
            <div>
              <span className="font-semibold">Affiliation:</span> {talk.affiliation}
            </div>
          )}
          {talk.abstract && (
            <div>
              <div className="font-semibold mb-1">Abstract:</div>
              {talk.abstract.split(/\n+/).map((para, i) => (
                <p key={i} className="text-justify leading-relaxed mb-1">
                  {para}
                </p>
              ))}
            </div>
          )}
          {talk.references && (
            <div>
              <div className="font-semibold mb-1">References:</div>
              <div className="whitespace-pre-line leading-relaxed opacity-70">
                {talk.references}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── EVENT CARD ──────────────────────────────────────────────────────────────

const EventCard = ({ event }) => {
  const style = typeStyles[event.type] || typeStyles.session;

  return (
    <div
      className={`rounded-lg p-3 shadow-sm flex flex-col ${style.card}`}
      style={style.cardStyle}
    >
      {/* Title */}
      <div className={`font-bold text-sm leading-snug mb-1 ${style.titleColor}`}>
        {event.link ? (
          <a
            href={event.link}
            className="underline decoration-dotted hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.title}
          </a>
        ) : (
          event.title
        )}
      </div>

      {/* Chair */}
      {event.chair && (
        <div className={`text-xs mb-0.5 ${style.metaColor}`}>
          <span className="font-semibold">Chair:</span>{" "}
          {event.chairLink ? (
            <a
              href={event.chairLink}
              className="underline decoration-dotted hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.chair}
            </a>
          ) : (
            event.chair
          )}
        </div>
      )}

      {/* Location */}
      {event.location && (
        <div className={`text-xs mb-1 ${style.metaColor}`}>
          <span className="font-semibold">Location:</span>{" "}
          {event.locationLink ? (
            <a
              href={event.locationLink}
              className="underline decoration-dotted hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.location}
            </a>
          ) : (
            event.location
          )}
        </div>
      )}

      {/* Talks */}
      {event.talks && event.talks.length > 0 && (
        <div className="mt-2 space-y-2 flex-1">
          {event.talks.map((talk, i) => (
            <TalkRow key={i} talk={talk} style={style} />
          ))}
        </div>
      )}

      {/* Badge — bottom right */}
      {style.badge && (
        <div className="flex justify-end mt-2">
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${style.badge}`}
          >
            {style.badgeLabel}
          </span>
        </div>
      )}
    </div>
  );
};

// ─── SCHEDULE DATA ────────────────────────────────────────────────────────────

const scheduleData = {
  wednesday: {
    label: "Wednesday, 17th December",
    timeSlots: [
      {
        time: "09:10",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php",
          location: "LT1",
          locationLink: "https://www.google.com/maps/place/LT1,+Pilani,+Chicalim,+Sancoale,+Goa+403726",
        },
      },
      { time: "10:10", event: { type: "break", title: "Coffee Break" } },
      { time: "10:30", event: { type: "break", title: "RHPL Opening Remarks" } },
      {
        time: "10:35",
        event: {
          type: "session", title: "Session 1: Concurrency",
          chair: "Bernd Finkbeiner", chairLink: "https://cispa.de/en/people/finkbeiner",
          location: "DLT-9", locationLink: "https://www.google.com/maps/place/DLT-9+(Mini-Auditorium)",
          talks: [
            {
              time: "10:35–11:00", presenter: "Nobuko Yoshida", presenterLink: "https://mrg.cs.ox.ac.uk/",
              title: "Specification-Guided Programming for Asynchronous Message-Passing Optimisation",
              affiliation: "University of Oxford",
              abstract: `Rust is a modern systems language focused on performance and reliability. Complementing Rust's promise to provide "fearless concurrency", developers frequently exploit asynchronous message passing. To guarantee deadlock-freedom by construction, we present Rumpsteak: a new Rust framework based on multiparty session types.\n\nRumpsteak incorporates two recent advanced session type theories: (1) k-multiparty compatibility (k-MC), which globally verifies the safety of a set of participants, and (2) asynchronous multiparty session subtyping, which locally verifies optimisations in the context of a single participant. We propose a novel algorithm for asynchronous subtyping that is both sound and decidable.`,
              references: "[1] Martin Vassor and Nobuko Yoshida. Refinements for Multiparty Message-Passing Protocols. ECOOP 2024. https://doi.org/10.4230/LIPIcs.ECOOP.2024.41",
            },
            {
              time: "11:00–11:25", presenter: "Omkar Tuppe", presenterLink: "https://homepages.iitb.ac.in/~194050003/",
              title: "GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency",
              affiliation: "IIT Bombay",
              abstract: "Modern GPUs adopt weak memory concurrency for performance, but their added complexity makes writing correct concurrent code significantly more complicated than on CPUs.\n\nWe developed GPUMC, a stateless model checker for verifying GPU programs under the scoped-RC11 memory model. GPUMC systematically explores all possible executions to detect data races, heterogeneous races, barrier divergence, and assertion violations.",
              references: "[1] Chakraborty, S., Krishna, S., Pavlogiannis, A., Tuppe, O. GPUMC. CAV 2025. https://doi.org/10.1007/978-3-031-98682-6_17",
            },
            {
              time: "11:25–11:40", presenter: "Soumodev Mal", presenterLink: "https://www.linkedin.com/in/soumodev-mal-10329b185/",
              title: "Bridging Nets-within-Nets and Data Nets",
              affiliation: "IIT Dharwad",
              abstract: "Elementary Object Systems (EOSs) are a model in the nets-within-nets (NWNs) paradigm, where tokens in turn can host standard Petri nets. We precisely characterize cEOS coverability into the framework of data nets, whose tokens carry data from an infinite domain.\n\nThis insight bridges two apparently orthogonal approaches to PN extensions, namely data nets and NWNs, and enables us to analyze cEOS coverability taking advantage of known results on data nets.",
              references: "[1] Di Cosmo, F., Mal, S., Prince, T. Nets-Within-Nets Through the Lens of Data Nets. RP 2025. https://doi.org/10.1007/978-3-032-09524-4_11",
            },
          ],
        },
      },
      {
        time: "11:50",
        event: {
          type: "session", title: "Session 2: Learning and Verification with Partial Information",
          chair: "Govind R", chairLink: "https://rdnivog.github.io/",
          location: "DLT-9",
          talks: [
            {
              time: "11:50–12:15", presenter: "Sreejith A V", presenterLink: "https://sreejithavtvm.github.io/",
              title: "Learning Deterministic One-Counter Automata in Polynomial Time",
              affiliation: "IIT Goa",
              abstract: "We present OL*, a polynomial-time algorithm for active learning of deterministic one-counter automata (DOCA). Unlike previous exponential-time syntactic approaches, OL* is semantic — it learns the language of the target automaton without any knowledge of the DOCA structure.",
              references: "[1] Prince Mathew, Vincent Penelle, A. V. Sreejith. Learning Deterministic One-Counter Automata in Polynomial Time. LICS 2025, pp. 444-457.",
            },
            {
              time: "12:15–12:40", presenter: "Gourav Takhar", presenterLink: "https://tgourav.github.io/",
              title: "Verification of Open Programs via LLM-Mined Behavioral Idioms",
              affiliation: "IIT Kanpur",
              slidesLink: "https://docs.google.com/presentation/d/1UB_j4SBuNlk0MuI6tG_0zztDUW9erMxQ/edit",
              abstract: "We present a technique that significantly improves the precision of memory-safety verification for incomplete programs by leveraging LLMs. Our approach mines idiomatic buffer-manipulation patterns from real code bases using an LLM, and then employs a property-directed synthesis strategy to select and adapt these patterns into angelic assumptions.\n\nWe implement this technique in Seeker. Across benchmarks from widely used open-source projects, Seeker identifies 79% of false positives with zero false negatives.",
              references: "[1] Gourav Takhar et al. Memory-Safety Verification of Open Programs with Angelic Assumptions. OOPSLA2 2025. https://doi.org/10.1145/3763090",
            },
          ],
        },
      },
      { time: "12:40", event: { type: "break", title: "Lunch" } },
      {
        time: "14:00",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php", location: "LT1",
        },
      },
      { time: "15:00", event: { type: "break", title: "Coffee Break" } },
      {
        time: "15:30",
        event: {
          type: "session", title: "Session 3: Markov Decision Processes",
          chair: "Djordje Zikelic", chairLink: "https://djordjezikelic.github.io/",
          location: "DLT-9",
          talks: [
            {
              time: "15:30–15:55", presenter: "Shibashis Guha", presenterLink: "https://www.tifr.res.in/~shibashis.guha/",
              title: "Continuous Time Reward Machines",
              affiliation: "TIFR Mumbai",
              slidesLink: "https://drive.google.com/file/d/1Q3Ss9XoMnJxoret25tKo8xpssM3ujaki/view",
              abstract: "We propose continuous-time reward machines (CTRMs), a novel framework that embeds reward functions and real-time state-action dynamics into a unified structure. CTRMs enable RL agents to effectively navigate dense-time environments while leveraging reward shaping and counterfactual experiences for accelerated learning.",
              references: "[1] Amin Falah, Shibashis Guha, Ashutosh Trivedi. Continuous-Time Reward Machines. IJCAI 2025, pp. 5056-5064.",
            },
            {
              time: "15:55–16:20", presenter: "Ramneet Singh", presenterLink: "https://ramneet-singh.netlify.app/",
              title: "INTERLEAVE: A Faster Symbolic Algorithm for Maximal End Component Decomposition",
              affiliation: "Microsoft Research",
              slidesLink: "https://drive.google.com/file/d/1L7Q4zJfudVkMEdAhoqrr0ax9gHkmjYtI/view",
              abstract: "The key idea behind our algorithm INTERLEAVE is to interleave the computation of SCCs with eager elimination of redundant state-action pairs. An empirical evaluation demonstrates that it solves 19 more benchmarks than the closest previous algorithm, with a 3.81x average speedup in runtime.",
              references: `[1] Bansal, Suguman, and Ramneet Singh. "INTERLEAVE." CAV 2025.`,
            },
          ],
        },
      },
      {
        time: "16:30",
        event: {
          type: "session", title: "Session 4: Cyber-Physical Systems",
          chair: "Kumar Madhukar", chairLink: "https://kumarmadhukar.github.io/",
          location: "DLT-9",
          talks: [
            {
              time: "16:30–16:45", presenter: "Anand Yeolekar", presenterLink: "https://ieeexplore.ieee.org/author/38232933600",
              title: "Repairing Control Safety Violations by Patching the Real-time OS Scheduler",
              affiliation: "TCS Research",
              abstract: "We present a technique to detect and repair control safety violations by synthesizing a scheduler patch — a pre-computed list of jobs to be not scheduled at runtime — that eliminates violations without the need of modifications at the control or task layer.",
              references: "[1] Anand Yeolekar et al. Repairing Control Safety Violations via Scheduler Patch Synthesis. ICCPS 2025. https://doi.org/10.1145/3716550.3722035",
            },
            {
              time: "16:45–17:00", presenter: "Santonu Sarkar", presenterLink: "https://www.bits-pilani.ac.in/goa/santonu-sarkar/",
              title: "LLM-Assisted Formal Verification Framework for Process Control Software Evolution",
              affiliation: "BITS Goa",
              abstract: "This proposal presents a hybrid approach that combines the adaptability of LLMs with the rigor of formal verification for automated software upgrades for Sequential Function Chart (SFC) code. Our framework includes: (1) an integrated approach combining formal verification with LLM-guided upgrades; (2) counterexample-driven prompt refinement; and (3) automated repair functions.",
              references: "[1] Soumyadip Bandyopadhyay, Santonu Sarkar. Antarbhukti. ATVA 2025, pp. 447-471.",
            },
            {
              time: "17:00–17:15", presenter: "Atanu Kundu", presenterLink: "https://atanucs.github.io/",
              title: "Data-Driven Falsification of Cyber-Physical Systems",
              affiliation: "Indian Association for the Cultivation of Science",
              slidesLink: "https://drive.google.com/file/d/10yvtsWOtD60BSR-lAZSA6H9c-FMbpxUT/view",
              abstract: "The algorithm leverages the inherent interpretability of Decision Trees for faster falsification of CPS. This is achieved by: (1) building a Decision Tree as a surrogate model of the CPS under test, and (2) a novel falsification algorithm guided by the explanations of safety violations extracted from its Decision Tree surrogate.",
              references: "[1] Atanu Kundu, Sauvik Gon, and Rajarshi Ray. Data-Driven Falsification of CPS. ISEC 2024. https://doi.org/10.1145/3641399.3641401",
            },
            {
              time: "17:15–17:30", presenter: "Alvin A. George", presenterLink: "https://ieeexplore.ieee.org/author/37088487403",
              title: "CEGAR for Temporal Properties based on Recurrent Sets",
              affiliation: "Indian Institute of Science, Bangalore",
              abstract: "We present a CEGAR-based technique for verifying linear-time temporal properties of discrete-time systems with infinite states. We provide novel validation and refinement algorithms to handle lasso-shaped abstract counterexamples based on the notion of recurrent sets.",
              references: "[1] Alvin A. George, Deepak D'Souza, Pavithra Prabhakar. CEGAR-based Verification of Temporal Properties of Robotic Systems. Unpublished, 2025.",
            },
          ],
        },
      },
    ],
  },

  thursday: {
    label: "Thursday, 18th December",
    timeSlots: [
      {
        time: "09:00",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php", location: "LT1",
        },
      },
      { time: "10:00", event: { type: "break", title: "Coffee Break" } },
      {
        time: "10:30",
        event: {
          type: "session", title: "Session 1: Program Equivalence and Ownership Semantics",
          chair: "Madhavan Mukund", chairLink: "https://www.cmi.ac.in/~madhavan/",
          location: "DLT-9",
          talks: [
            {
              time: "10:30–10:55", presenter: "Umang Mathur", presenterLink: "https://www.comp.nus.edu.sg/~umathur/",
              title: "Equivalences for Causal Concurrency",
              affiliation: "National University of Singapore",
              slidesLink: "https://drive.google.com/file/d/1YfK5trIXqPtHWVsqtf-xOAgSVWDL6YYa/view",
              abstract: "This talk will begin with a gentle introduction to trace theory, a principled mathematical framework for defining equivalence relations among concurrent program executions. I will then compare trace theory with reads-from equivalence, and discuss our recent efforts to generalize trace theory to reconcile it with reads-from equivalence.",
              references: "[1] Farzan, Azadeh, and Umang Mathur. Coarser equivalences for causal concurrency. POPL 2024.\n[2] Ang, Zhendong, and Umang Mathur. Predictive monitoring against pattern regular languages. POPL 2024.",
            },
            {
              time: "10:55–11:20", presenter: "S. VenkataKeerthy", presenterLink: "https://svkeerthy.github.io/",
              title: "VEXIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity",
              affiliation: "IIT Hyderabad",
              slidesLink: "https://drive.google.com/file/d/1Lq72K6RAsENhajBWUF4Dr71jBwePE40F/view",
              abstract: "We propose VexIR2Vec, a robust, architecture-neutral approach based on VEX-IR to solve binary similarity tasks. VexIR2Vec consists of three key components: a peephole extractor, a normalization engine (VexINE), and an embedding model (VexNet). In diffing experiments, VexIR2Vec outperforms the nearest baseline across four adversarial settings by 40%, 18%, 21%, and 60%, respectively.",
              references: "[1] S. VenkataKeerthy et al. VexIR2Vec. ACM TOSEM, March 2025. https://doi.org/10.1145/3721481",
            },
            {
              time: "11:20–11:35", presenter: "Siddharth Priya", presenterLink: "https://priyasiddharth.github.io/",
              title: "Ownership in Low-Level Intermediate Representation",
              affiliation: "University of Waterloo",
              slidesLink: "https://drive.google.com/file/d/1Xkmjk7VVQQsI6jjB85VDTWKm0LMYJAC3/view",
              abstract: "This talk introduces OSEA-IR, a low-level intermediate representation that restores ownership semantics using well-defined aliasing primitives and a pointer-resident cache, allowing verification conditions to avoid symbolic address maps whenever memory access is provably exclusive. This approach yields 1.3x–5x improvements in SMT solving time.",
              references: "[1] Siddharth Priya, Arie Gurfinkel. Ownership in low-level intermediate representation. FMCAD 2024.",
            },
          ],
        },
      },
      {
        time: "11:45",
        event: {
          type: "session", title: "Session 2: Compilers",
          chair: "Uday Khedker", chairLink: "https://www.cse.iitb.ac.in/~uday/",
          location: "DLT-9",
          talks: [
            {
              time: "11:45–12:10", presenter: "Aditya Anand", presenterLink: "https://adityaanand7.github.io",
              title: "CoSSJIT: Combining Static Analysis and Speculation in JIT Compilers",
              affiliation: "IIT Bombay",
              slidesLink: "https://drive.google.com/file/d/14rzklrdLaM41K0Km9Q0CXFfeg4hRgC9S/view",
              abstract: "In this work (published at OOPSLA-25), we propose the first-of-its-kind approach to enrich static analysis with the possibility of speculative optimization during JIT compilation, as well as its usage to perform aggressive stack allocation on a production Java Virtual Machine (JVM).",
              references: `[1] Aditya Anand et al. "CoSSJIT: Combining Static Analysis and Speculation in JIT Compilers". OOPSLA 2025.`,
            },
            {
              time: "12:10–12:25", presenter: "Supriya Bhide", presenterLink: "https://supriya-bhide.github.io/",
              title: "CoS-SSA: Context-Sensitive SSA for Interprocedural Program Analyses and Optimisations",
              affiliation: "IIT Bombay",
              abstract: "We propose CoS-SSA, a precise interprocedural SSA form that generalises the classical SSA to support def-use edges between global variables across procedures even in the presence of pointers and recursion. CoS-SSA provides context-sensitivity for free, apart from flow-sensitivity.",
            },
            {
              time: "12:25–12:40", presenter: "Aniket Mishra", presenterLink: "https://satiscugcat.github.io/",
              title: "Mechanical Specification and Verification for Mitigating Timing-based Side Channel Leaks",
              affiliation: "IIT Gandhinagar",
              slidesLink: "https://drive.google.com/file/d/1OKgnlqoT_hZRodVv-XiD2JR_wQQZhTvy/view",
              abstract: "We introduce a language with a semantics that keeps execution time constant with respect to an adversary under an observationally equivalent memory. We formalize the semantics in Rocq and prove that these semantics satisfy the property of timing-sensitive non-interference.",
              references: `[1] Mishra, Aniket, and Abhishek Bichhawat. "Fall-Through Semantics for Mitigating Timing-Based Side Channel Leaks." FSTTCS 2025.`,
            },
          ],
        },
      },
      { time: "12:40", event: { type: "break", title: "Lunch & RHPL Poster Session" } },
      {
        time: "14:00",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php", location: "LT1",
        },
      },
      { time: "15:00", event: { type: "break", title: "Coffee Break" } },
      {
        time: "15:30",
        event: {
          type: "session", title: "Session 3: Blended Session of FSTTCS Track B and RHPL",
          talks: [
            {
              time: "15:30–16:30",
              presenter: "FSTTCS Track B Talks",
              presenterLink: "https://www.fsttcs.org.in/2025/program.php",
              title: "Chair: Deepak D'Souza · Location: DLT-10",
            },
            {
              time: "16:30–17:30",
              presenter: "RHPL Panel Discussion",
              presenterLink: "/rhpl2025/panel_discussion",
              title: "Chair: Umang Mathur · Location: DLT-9",
            },
          ],
        },
      },
    ],
  },

  friday: {
    label: "Friday, 19th December",
    timeSlots: [
      {
        time: "09:00",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php", location: "LT1",
        },
      },
      { time: "10:00", event: { type: "break", title: "Coffee Break" } },
      {
        time: "10:30",
        event: {
          type: "session", title: "Session 1: Verification",
          chair: "Dietmar Berwanger", chairLink: "https://home.lmf.cnrs.fr/DietmarBerwanger/",
          location: "DLT-9",
          talks: [
            {
              time: "10:30–10:45", presenter: "Arpita Dutta", presenterLink: "https://arpitad10j.wixsite.com/arpitad10j",
              title: "Incremental and Unbounded Loop Analysis",
              affiliation: "National University of Singapore",
              slidesLink: "https://drive.google.com/file/d/1Z0JU6nl3xJfxCtYUZ3I1OvdnW89vZkQm/view",
              abstract: "We address the problem of proving a loop invariant property within a perpetual loop. Our first goal is to prove the property holds at over all iterations (unbounded verification). Failing this, our subsequent goal is to determine a loop iteration bound where the property holds.\n\nOur framework is based on iterative deepening with two key features: incrementality (it learns and exploits the result of the previous iteration) and induction (a fixpoint-checking mechanism which can detect that the property is invariant throughout all iterations).",
            },
            {
              time: "10:45–11:00", presenter: "Mohammad Afzal", presenterLink: "https://www.linkedin.com/in/mohammad-afzal-b1a832125/",
              title: "Confidence-aware local robustness verification of neural networks",
              affiliation: "TCS Pune & IIT Bombay",
              slidesLink: "https://drive.google.com/file/d/1KMFTXUI3mkuP0LmtNWjc9yBp3QuNcxNl/view",
              abstract: "In this work, our goal is to build a generalised framework to specify and verify variants of robustness in neural network verification. We introduce new variants of robustness that take into account the confidence of the neural network in its outputs. We enable any state-of-the-art neural network verification tool to verify these variants, while incurring a bounded approximation error.",
            },
            {
              time: "11:00–11:15",
              presenter: (
                <>
                  <a href="https://www.linkedin.com/in/dr-varsha-jarali-086826238/" className="underline decoration-dotted hover:opacity-75" target="_blank" rel="noopener noreferrer">Dr Varsha Jarali</a>
                  {" / "}
                  <a href="https://sites.google.com/site/priyeshashikant/" className="underline decoration-dotted hover:opacity-75" target="_blank" rel="noopener noreferrer">Dr Shashi Kant Pandey</a>
                </>
              ),
              title: "On The Dolev-Yao Model of Symmetric Cascade Protocol",
              affiliation: "Society For Electronic Transactions and Security Chennai",
              slidesLink: "https://docs.google.com/presentation/d/1-clR-yPGtJH-nDb7lJh8tEW4_LmxEDvr/edit",
              abstract: "We extend the DY formal model and analyze all remaining four cases for symmetric two-party cascade protocols. A formal proof of security is presented for all four protocols based on a hybrid choice of symmetric and asymmetric encryption.",
            },
          ],
        },
      },
      {
        time: "11:30",
        event: {
          type: "special", title: "Session 2: Special session in honour of R. Venkatesh",
          link: "special_session",
          chair: "Neeldhara Misra", chairLink: "https://www.neeldhara.com/",
          location: "DLT-9", locationLink: "https://www.google.com/maps/place/DLT-9+(Mini-Auditorium)",
        },
      },
      { time: "12:40", event: { type: "break", title: "Lunch" } },
      {
        time: "14:00",
        event: {
          type: "invited", title: "FSTTCS Invited Talk",
          link: "https://www.fsttcs.org.in/2025/program.php", location: "LT1",
        },
      },
      { time: "15:00", event: { type: "break", title: "Coffee Break" } },
      {
        time: "15:30",
        event: {
          type: "session", title: "Session 3: Category Theory",
          chair: "Nobuko Yoshida", chairLink: "https://mrg.cs.ox.ac.uk/",
          location: "DLT-9",
          talks: [
            {
              time: "15:30–15:55", presenter: "Udit Mavinkurve", presenterLink: "https://scholar.google.com/citations?user=2aoSFx8AAAAJ",
              title: "An Invitation To Discrete Homotopy Theory",
              affiliation: "University of Western Ontario",
              abstract: "There is growing interest in extending mathematical tools originally developed for studying continuous objects to the study of discrete objects like graphs. Doing this gives rise to discrete homotopy theory — an approach introduced around 20 years ago. This theory has found applications in matroid theory, subspace arrangements, topological data analysis, and time series analysis.",
              references: "[1] Krzysztof Kapulkin, Udit Mavinkurve. The Fundamental Group in Discrete Homotopy Theory. Advances in Applied Mathematics, 2025.",
            },
            {
              time: "15:55–16:10", presenter: "Cristopher Mary Kouam", presenterLink: "https://github.com/hotdocx/emdash",
              title: "Emdash — A Dependently Typed Logical Framework for Computational Synthetic ω-Category Theory and Functorial Elaboration",
              affiliation: "BITS Pilani",
              slidesLink: "https://drive.google.com/file/d/1ZJI8mkZrZVQ8j2XEJ95BMJHsSk3xcZEg/view",
              abstract: "We present Emdash, a novel dependently typed logical framework designed to support computational synthetic category theory. A key contribution is the concept of functorial elaboration, where kernel-level constructors verify coherence laws during elaboration, throwing a CoherenceError upon failure.",
              references: "[1] Christopher Mary Kouam. Emdash. Unpublished, 2025. https://github.com/hotdocx/emdash",
            },
          ],
        },
      },
      {
        time: "16:15",
        event: {
          type: "session", title: "Session 4: Online Talks",
          chair: "Abhisekh Sankaran", chairLink: "https://abhisekhs.github.io/",
          location: "DLT-9", locationLink: "https://www.google.com/maps/place/DLT-9+(Mini-Auditorium)",
          talks: [
            {
              time: "16:15–16:35", presenter: "Pankaj Kumar Kalita", presenterLink: "https://pkalita595.github.io/",
              title: "Program Synthesis Meets Visual What-Comes-Next Puzzles",
              affiliation: "IBM",
              abstract: "We propose to automatically synthesize What-Comes-Next (WCN) puzzles by posing puzzle generation as a program synthesis problem. We design PuzzlerLang, a small yet expressive language. PuzzleGen is fast, averaging 3.4 seconds per puzzle, and user studies show PuzzleGen-generated puzzles are indistinguishable from human-created ones.",
              references: "[1] Sumit Lahiri et al. Program Synthesis Meets Visual What-Comes-Next Puzzles. ASE 2024. https://doi.org/10.1145/3691620.3695015",
            },
            {
              time: "16:35–16:55", presenter: "Lipsy Gupta", presenterLink: "https://www.linkedin.com/in/lipsy-gupta-9b1929259",
              title: "Safety Verification of Anytime Perception based Cyber-Physical Systems",
              affiliation: "Kansas State University",
              slidesLink: "https://drive.google.com/file/d/1fqT90mRB_oQBEDgt94dP-OLrc47M_M0G/view",
              abstract: "We focus on the safety verification of anytime perception-based CPS, wherein we model the anytime sensor in the closed loop. We provide an efficient algorithm for reachable set computation of a closed-loop system with an anytime sensor and a neural network controller using the star set data structure.",
            },
            {
              time: "16:55–17:05", presenter: "Abhishek De", presenterLink: "https://sites.google.com/view/abhishekde",
              title: "A proofs vs programs correspondence for the epsilon calculus",
              affiliation: "Krea University",
              abstract: "In this talk, we explore the proofs vs programs correspondence for the epsilon calculus. It turns out that epsilon calculus has some mild classical features, which give rise to computational effects at the level of programs. This is a work in progress with Bruno da Rocha Paiva.",
            },
          ],
        },
      },
    ],
  },
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Programme = () => {
  const [activeDay, setActiveDay] = useState("wednesday");

  const dayTabs = [
    { id: "wednesday", label: "Wednesday, 17th December" },
    { id: "thursday", label: "Thursday, 18th December" },
    { id: "friday", label: "Friday, 19th December" },
  ];

  const dayData = scheduleData[activeDay];

  return (
    <div className="content font-sans">
      <div className="contain py-10">
        <h1 className="text-[27px] font-bold mb-2">Programme</h1>
        <hr className="border-black mb-6" />

        <Tabs tabs={dayTabs} activeTab={activeDay} setActiveTab={setActiveDay} />

        <p className="text-gray-400 text-sm mt-4 mb-4">{dayData.label}</p>

        <div className="space-y-0">
          {dayData.timeSlots.map((slot, idx) => (
            <div key={idx} className="flex gap-3 border-b border-gray-100 py-3 last:border-b-0 align-top">
              {/* Time */}
              <div className="w-14 flex-shrink-0 text-xs font-mono text-gray-400 pt-3">
                {slot.time}
              </div>
              {/* Card */}
              <div className="flex-1">
                <EventCard event={slot.event} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programme;
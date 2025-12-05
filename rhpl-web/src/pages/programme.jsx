import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";


const ProgrammeRow = ({ time, title }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#c2e0f4] p-3 rounded mb-2">
      <span className="sm:w-48 flex-shrink-0 text-left font-medium mb-1 sm:mb-0">{time}</span>
      <span className="flex-1 sm:pl-4 font-semibold">{title}</span>
    </div>
  );
};

const SessionHeader = ({ time, number, title, chair, location }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#c2e0f4] p-3 rounded mb-2">
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
  const [activeDay, setActiveDay] = useState("monday");

  const dayTabs = [
    { id: "monday", label: "Monday, 17th December" },
    { id: "tuesday", label: "Tuesday, 18th December" },
    { id: "wednesday", label: "Wednesday, 19th December" },
  ];

  return (
    <div className="content">
      <p className="contain py-10 space-y-2">
        <h1 className="text-[27px] font-bold">Programme</h1>
        <hr className="border-black pb-4" />

        <Tabs tabs={dayTabs} activeTab={activeDay} setActiveTab={setActiveDay} />

        <div className="pt-5">
        {/* MONDAY PROGRAMME */}
        {activeDay === "monday" && (
          <div>
            <ProgrammeRow
              time="09:00 AM - 10:00 AM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="10:00 AM - 10:30 AM"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 AM - 12:35 PM"
              number={1}
              title="Concurrency"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 AM - 10:55 AM"
                presenter="Nobuko Yoshida"
                title="Specification Guided Distributed Programming"
              />
              <Talk
                time="10:55 AM - 11:20 AM"
                presenter="Omkar Tuppe"
                title="GPUMC: A Stateless Model Checker for GPU Weak Memory Concurrency"
              />
              <Talk
                time="11:20 AM - 11:35 AM"
                presenter="Tephilla Prince"
                title="Bridging Nets-within-Nets and Data Nets"
              />
            </div>

            <SessionHeader
              time="11:45 AM - 12:35 PM"
              number={2}
              title="Learning and Verification with Incomplete Data"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="11:45 AM - 12:10 PM"
                presenter="Prince Mathew"
                title="Learning Deterministic One-Counter Automata in Polynomial Time"
              />
              <Talk
                time="12:10 PM - 12:35 PM"
                presenter="Gourav Takhar"
                title="Memory-Safety Verification of Open Programs With Angelic Assumptions"
              />
            </div>

            <ProgrammeRow
              time="12:40 PM - 14:00 PM"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 PM - 15:00 PM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="15:00 PM - 15:30 PM"
              title="Coffee Break"
            />

            <SessionHeader
              time="15:30 PM - 16:20 PM"
              number={3}
              title="MDPs"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="15:30 PM - 15:55 PM"
                presenter="Ramneet Singh"
                title="INTERLEAVE: A Faster Symbolic Algorithm for Maximal End Component Decomposition"
              />
              <Talk
                time="15:55 PM - 16:20 PM"
                presenter="Shibashis Guha"
                title="Continuous Time Reward Machines"
              />
            </div>

            <SessionHeader
              time="16:30 PM - 17:30 PM"
              number={4}
              title="Cyber-Physical Systems"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="16:30 PM - 16:45 PM"
                presenter="Atanu Kundu"
                title="Data-Driven Falsification of Cyber-Physical Systems"
              />
              <Talk
                time="16:45 PM - 17:00 PM"
                presenter="Anand Yeolekar"
                title="Repairing Control Safety Violations by Patching the Real-time OS Scheduler"
              />
              <Talk
                time="17:00 PM - 17:15 PM"
                presenter="Alvin A. George"
                title="CEGAR for Temporal Properties based on Recurrent Sets"
              />
              <Talk
                time="17:15 PM - 17:30 PM"
                presenter="Santonu Sarkar"
                title="LLM-Assisted Formal Verification Framework for Process Control Software Evolution"
              />
            </div>

            <div className="mb-2">Dummy text</div>
          </div>
        )}

        {/* TUESDAY PROGRAMME */}
        {activeDay === "tuesday" && (
          <div>
            <ProgrammeRow
              time="09:00 AM - 10:00 AM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="10:00 AM - 10:30 AM"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 AM - 11:35 AM"
              number={1}
              title="Program Equivalence and Neural Network Verification"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 AM - 10:55 AM"
                presenter="Umang Mathur"
                title="Equivalences for Causal Concurrency"
              />
              <Talk
                time="10:55 AM - 11:20 AM"
                presenter="S. VenkataKeerthy"
                title="VEXIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity"
              />
              <Talk
                time="11:20 AM - 11:35 AM"
                presenter="Mohammad Afzal"
                title="Confidence-aware local robustness verification of neural networks"
              />
            </div>

            <SessionHeader
              time="11:45 AM - 12:40 PM"
              number={2}
              title="Compilers"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="11:45 AM - 12:10 PM"
                presenter="Aditya Anand"
                title="CoSSJIT: Combining Static Analysis and Speculation in JIT Compilers"
              />
              <Talk
                time="12:10 PM - 12:25 PM"
                presenter="Supriya Bhide"
                title="CoS-SSA: Context-Sensitive SSA for Interprocedural Program Analyses and Optimisations"
              />
              <Talk
                time="12:25 PM - 12:40 PM"
                presenter="Aniket Mishra"
                title="Fall-through Semantics for Mitigating Timing-based Side Channel Leaks"
              />
            </div>

            <ProgrammeRow
              time="12:40 PM - 14:00 PM"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 PM - 15:00 PM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="15:00 PM - 15:30 PM"
              title="Coffee Break"
            />
          </div>
        )}

        {/* WEDNESDAY PROGRAMME */}
        {activeDay === "wednesday" && (
          <div>
            <ProgrammeRow
              time="09:00 AM - 10:00 AM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="10:00 AM - 10:30 AM"
              title="Coffee Break"
            />

            <SessionHeader
              time="10:30 AM - 12:40 PM"
              number={1}
              title="Session 1"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="10:30 AM - 10:45 AM"
                presenter="Siddharth Priya"
                title="Ownership in Low-Level Intermediate Representation"
              />
              <Talk
                time="10:45 AM - 11:00 AM"
                presenter="Dr Varsha Jarali"
                title="On The Dolev-Yao Model of Symmetric Cascade Protocol"
              />
              <Talk
                time="11:00 AM - 11:15 AM"
                presenter="Arpita Dutta"
                title="Incremental and Unbounded Loop Analysis"
              />
            </div>

            <ProgrammeRow
              time="11:30 AM - 12:40 PM"
              title="Reminiscence Session for Venky"
            />

            <ProgrammeRow
              time="12:40 PM - 14:00 PM"
              title="Lunch"
            />

            <ProgrammeRow
              time="14:00 PM - 15:00 PM"
              title="FSTTCS Invited Talk"
            />
            <div className="mb-2">Dummy text</div>

            <ProgrammeRow
              time="15:00 PM - 15:30 PM"
              title="Coffee Break"
            />

            <SessionHeader
              time="15:30 PM - 17:00 PM"
              number={3}
              title="Session 3"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="15:30 PM - 15:45 PM"
                presenter="Presenter"
                title="short talk"
              />
              <Talk
                time="15:45 PM - 16:00 PM"
                presenter="Presenter"
                title="short talk"
              />
              <Talk
                time="16:00 PM - 16:15 PM"
                presenter="Presenter"
                title="short talk"
              />
              <Talk
                time="16:15 PM - 16:30 PM"
                presenter="Presenter"
                title="regular talk (online)"
              />
              <Talk
                time="16:30 PM - 16:45 PM"
                presenter="Presenter"
                title="regular talk (online)"
              />
              <Talk
                time="16:45 PM - 17:00 PM"
                presenter="Presenter"
                title="regular talk (online)"
              />
            </div>

            <SessionHeader
              time="17:15 PM - 18:05 PM"
              number={4}
              title="Session 4"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full pl-2 sm:pl-12 mb-4 space-y-1">
              <Talk
                time="17:15 PM - 17:30 PM"
                presenter="Presenter"
                title="regular talk (online)"
              />
              <Talk
                time="17:30 PM - 17:45 PM"
                presenter="Presenter"
                title="regular talk (online)"
              />
              <Talk
                time="17:45 PM - 17:50 PM"
                presenter="Presenter"
                title="short talk (online)"
              />
              <Talk
                time="17:50 PM - 18:05 PM"
                presenter="Presenter"
                title="short talk (online)"
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
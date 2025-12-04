import React, { useState } from "react";
import Tabs from "../components/tabs.jsx";

const ProgrammeRow = ({ time, title }) => {
  return (
    <div className="w-full m-1 flex bg-dayBlue p-1 rounded">
      <span className="w-41 text-left">{time}</span>
      <span className="flex-1 pl-5 font-medium">{title}</span>
    </div>
  );
};

const SessionHeader = ({ time, number, title, chair, location }) => {
  return (
    <div className="w-full m-1 bg-dayBlue p-1 rounded">
      <div className="flex items-center">
        <span className="w-41 text-left">{time}</span>
        <div className="flex flex-col">
          <span className="flex-1 pl-5 font-bold">
            Session {number}: {title}
          </span>
          {chair && (
            <span className="block flex-1 pl-5 font-medium">
              <b>Chair:</b> {chair}
            </span>
          )}
          {location && (
            <span className="block flex-1 pl-5 font-medium">
              <b>Location:</b> {location}
            </span>
          )}
        </div>
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
    <div className="flex gap-4">
      <span className="w-40 pl-1">{time}</span>
      <div className="flex flex-col">
        {presenter && (
          <span className="italic">
            <a href={presenterLink} className="underline text-blue-700">
              {presenter}
            </a>
          </span>
        )}
        <span>{title}</span>
      </div>
      <div>
        <span className="hidden w-40 pl-1">{abstract}</span>
      </div>
      <div>
        <span className="hidden w-40 pl-1">{affiliation}</span>
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
          <div className="space-y-2">
            {/* Invited Talk 1 */}
            <ProgrammeRow
              time="09:00 AM - 10:00 AM"
              title="Invited Talk 1"
            />
            <div>Dummy text</div>

            {/* Coffee Break */}
            <ProgrammeRow
              time="10:00 AM - 10:30 AM"
              title="Coffee Break"
            />

            {/* Morning Session */}
            <SessionHeader
              time="10:30 AM - 12:45 PM"
              number={1}
              title="Concurrency"
              chair="TBA"
              location="TBA"
            />

            {/* Inside Morning Session */}
            <div className="w-full m-1 pl-10 space-y-2">
              <Talk
                time="10:30 AM - 10:55 AM"
                presenter="Presenter"
                title="Regular Talk 1 Updated"
              />
              <Talk
                time="10:55 AM - 11:20 AM"
                presenter="Presenter"
                title="Regular Talk 2 Updated"
              />
              <Talk
                time="11:20 AM - 11:35 AM"
                presenter="Presenter"
                title="Short Talk"
              />
            </div>

            <SessionHeader
              time="11:45 AM - 12:35 PM"
              number={2}
              title="Learning and Verification with Incomplete Data"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full m-1 pl-10 space-y-2">

              <Talk
                time="11:45 AM - 12:10 PM"
                presenter="Presenter"
                title="Regular Talk 3"
              />
              <Talk
                time="12:10 PM - 12:35 PM"
                presenter="Presenter"
                title="Regular Talk 4"
              />
            </div>

            {/* Lunch */}
            <ProgrammeRow
              time="12:30 PM - 14:00 PM"
              title="Lunch"
            />

            {/* Invited Talk 2 */}
            <ProgrammeRow
              time="14:00 PM - 15:00 PM"
              title="Invited Talk 2"
            />
            <div>Dummy text</div>

            {/* Coffee Break */}
            <ProgrammeRow
              time="15:00 PM - 15:30 PM"
              title="Coffee Break"
            />

            {/* Afternoon Session */}
            <SessionHeader
              time="15:30 PM - 16:20 PM"
              number={3}
              title="MDPs"
              chair="TBA"
              location="TBA"
            />

            <div className="w-full m-1 pl-10 space-y-2">
              <Talk
                time="15:30 PM - 15:55 PM"
                presenter="Presenter"
                title="Regular Talk 5"
              />
              <Talk
                time="15:55 PM - 16:20 PM"
                presenter="Presenter"
                title="Regular Talk 6"
              />
            </div>

            <SessionHeader
              time="16:30 PM - 17:30 PM"
              number={4}
              title="Cyber-Physical Systems "
              chair="TBA"
              location="TBA"
            />

            <div className="w-full m-1 pl-10 space-y-2">
              <Talk
                time="16:30 PM - 16:45 PM"
                presenter="Presenter"
                title="Short Talk"
              />
              <Talk
                time="16:45 PM - 17:00 PM"
                presenter="Presenter"
                title="Short Talk"
              />
              <Talk
                time="17:00 PM - 17:15 PM"
                presenter="Presenter"
                title="Short Talk"
              />
              <Talk
                time="17:15 PM - 17:30 PM"
                presenter="Presenter"
                title="Short Talk"
              />
            </div>

            {/* Reminiscence */}
            <ProgrammeRow
              time="17:15 PM - 18:00 PM"
              title="Reminiscence Session for Venky"
            />
            <div>Dummy text</div>
          </div>
        )}

        {/* TUESDAY PROGRAMME (placeholder for now) */}
        {activeDay === "tuesday" && (
          <div className="m-1">
            <span className="block font-medium">
              Programme for Tuesday will be updated soon.
            </span>
          </div>
        )}

        {/* WEDNESDAY PROGRAMME (placeholder for now) */}
        {activeDay === "wednesday" && (
          <div className="m-1">
            <span className="block font-medium">
              Programme for Wednesday will be updated soon.
            </span>
          </div>
        )}

        </div>
      </p>
    </div>
  );
};

export default Programme;

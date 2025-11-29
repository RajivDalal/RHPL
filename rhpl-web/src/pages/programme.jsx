const ProgrammeRow = ({ time, title }) => {
  return (
    <div className="w-full m-1 flex bg-dayBlue p-1 rounded">
      <span className="w-41 text-left pl-4">{time}</span>
      <span className="flex-1 text-center font-medium">{title}</span>
    </div>
  );
};

const Programme = () => {
  return (
    <div className="content flex flex-col py-10 paraLink items-center">

      <h1 className="text-[27px] font-bold">Programme</h1>
      <hr className="border-black pb-4 w-full" />

      {/* Day Header */}
      <div className="m-1 bg-dayBlue text-center w-full p-1 font-semibold">
        Monday, 17th December
      </div>

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
      <ProgrammeRow 
        time="10:30 AM - 12:45 PM"
        title="Morning Session"
      />

      {/* Inside Morning Session */}
      <div className="w-full m-1">

        {/* Talk 1 */}
        <div className="flex gap-4">
          <span className="w-40">10:30 AM - 10:55 AM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 1</span>
          </div>
        </div>

        {/* Talk 2 */}
        <div className="flex gap-4">
          <span className="w-40">10:55 AM - 11:20 AM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 2</span>
          </div>
        </div>

        {/* Short Talk */}
        <div className="flex gap-4">
          <span className="w-40">11:20 AM - 11:35 AM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Short Talk</span>
          </div>
        </div>

        {/* Break */}
        <div className="flex gap-4">
          <span className="w-40">11:35 AM - 11:45 AM</span>
          <div className="flex flex-col">
            <span>Short Break</span>
          </div>
        </div>

        {/* Talk 3 */}
        <div className="flex gap-4">
          <span className="w-40">11:45 AM - 12:10 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 3</span>
          </div>
        </div>

        {/* Talk 4 */}
        <div className="flex gap-4">
          <span className="w-40">12:10 PM - 12:35 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 4</span>
          </div>
        </div>
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
      <ProgrammeRow
        time="15:30 PM - 17:00 PM"
        title="Afternoon Session"
      />

      {/* Inside Afternoon Session */}
      <div className="w-full m-1">

        {/* Talk 5 */}
        <div className="flex gap-4">
          <span className="w-40">15:30 PM - 15:55 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 5</span>
          </div>
        </div>

        {/* Talk 6 */}
        <div className="flex gap-4">
          <span className="w-40">15:55 PM - 16:20 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 6</span>
          </div>
        </div>

        {/* Talk 7 */}
        <div className="flex gap-4">
          <span className="w-40">16:25 PM - 16:50 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Regular Talk 7</span>
          </div>
        </div>

        {/* Short Talk */}
        <div className="flex gap-4">
          <span className="w-40">16:50 PM - 17:05 PM</span>
          <div className="flex flex-col">
            <span className="italic">
              <a href="#" className="underline text-blue-700">Presenter</a>
            </span>
            <span>Short Talk</span>
          </div>
        </div>
      </div>

      {/* Reminiscence */}
      <ProgrammeRow
        time="17:15 PM - 18:00 PM"
        title="Reminiscence Session for Venky"
      />
      <div>Dummy text</div>

    </div>
  );
};

export default Programme;

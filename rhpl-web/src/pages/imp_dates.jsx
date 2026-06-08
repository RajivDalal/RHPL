
const Important_dates = () => {
  return (
    <div className="content">
    <p className="contain py-10 space-y-2">
        <h1 className="text-[27px] font-bold">Important Dates</h1>
        <hr className="border-black pb-6" />
        <div className="paraLink">All dates below are in <a classname="underline" href="https://en.wikipedia.org/wiki/Indian_Standard_Time">Indian Standard Time (IST)</a>.</div> 
        <ul className="list-disc space-y-1 ml-8">
          <li>
            Submission portal opens: Sometime in June, 2026
          </li>
          <li>
            Submission deadline: TBA
          </li>
          <li>
            Notification: TBA
          </li>
          {/* <li>
            Early registration deadline: November 30, 2025
          </li> */}
          <li>
            RHPL@FSTTCS: December 2026
          </li>
        </ul>

      </p>
    </div>
  )
};

export default Important_dates;

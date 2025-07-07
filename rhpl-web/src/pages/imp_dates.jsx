
const Important_dates = () => {
  return (
    <div className="content">
      <p className="py-10">
        <h1 className="text-[27px] font-bold">Important Dates</h1>
        <hr className="border-black pb-6" />
        <ul className="list-disc space-y-1 ml-8">
          <li>
            Submission portal opens: Some time in July 2025
          </li>
          <li>
            Submission deadline: Early September
          </li>
          {/* <li>
            Submission deadline extension (provisioning for it): 7 - 10 days
          </li> */}
          {/* <li>
            Review period: 1 week
          </li> */}
          <li>
            Notification: September end of 3rd week
          </li>
          <li>
            Early registration deadline: TBA
          </li>
          <li>
            RHPL@FSTTCS: TBA
          </li>
        </ul>

      </p>
    </div>
  )
};

export default Important_dates;
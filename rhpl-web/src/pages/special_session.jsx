import VenkateshImage from "../images/Venkatesh.jpeg";
const Talk = ({
  time,
  presenterLink = "#",
  presenter,
  label,
  affiliation = "",
}) => {
  
  return (
   <div className="border-b border-gray-200 last:border-b-0">
  <div className="flex flex-col sm:flex-row py-2">
    <span className="sm:w-48 flex-shrink-0 text-sm sm:text-base">
      {time}
    </span>

    <div className="flex-1 sm:pl-4">
      {/* Speaker */}
      {presenter && (
        <div className="">
          <a
            href={presenterLink}
            className="italic underline text-blue-700 hover:text-blue-900"
          >
            {presenter}
          </a>
          <br />
          <p>{affiliation}</p>
        </div>
      )}

      {/* Non-speaker slot */}
      {!presenter && label && (
        <div>
          {label}
        </div>
      )}
    </div>
  </div>
</div>

  );
};
const Special_session=()=>{
    return (
        <div className="content">
            <p className="contain py-10 paraLink">
                <h1 className="text-[27px] font-bold">Special Session in Honour of R. Venkatesh</h1>
                <hr className="border-black pb-6"/>
                <section className = "grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className = "md: col-span-1 flex justify-center">
                        <img 
                            src={VenkateshImage} 
                            alt="R Venkatesh" 
                            className = "rounded-lg shadow-md max-w-xs w-full"
                        />
                    </div>
                    <div className = "md:col-span-2 space-y-4 text-justify leading-relaxed">
                        <p>
                            R. Venkatesh recently retired as a Chief Scientist from TCS Research, where he led the Foundations of Computing research area. He has over 30 years of experience in software development, formal methods, and program verification and validation.
His work focuses on advanced software engineering tools for automating model-based development, testing, and analysis of code and models.
<br/>
Widely known as Venky, he has been an inspiring leader, colleague, and mentor, and his work has had a lasting impact on both industry and academia.
<br/>
During his tenure, he led several tool-development projects, including TCS ECA, a commercially sold static analysis tool.
<br />
Other notable tools developed under his leadership include, to name a few, MasterCraft, a formal specification notation called EDT, VeriAbs (Gold winner in the safety category of SVCOMP), and VeriFuzz (Gold winner in TestComp).
<br />
A Reminiscences Session at RHPL is being organized to celebrate and honor Venky's contributions over the decades.
The schedule for the session follows.
                        </p>
                    </div>

                </section>
                 <h2 className = "text-xl font-bold mb-2 mt-6 ">Programme</h2>
                 <hr className="border-black pb-6"/>
                <section className="border rounded-md p-4 bg-[#cce5f6]">
                   
                    <div className= "flex justify-center">
                        <div className = "space-y-2 w-full max-w-3xl">
                            <Talk
                                time= "11:30 - 11:40" 
                                presenter = "B Srivathsan"
                                presenterLink="#"
                                affiliation="ABC University"
                            />
                            <Talk
                                time = "11:40 - 11:50"
                                presenter = "Mandyam Srivas"
                                presenterLink="#"
                            />
                            <Talk
                                time = "11:50 - 12:00"
                                presenter = "Uday Khedker"
                                presenterLink = "#"
                            />
                            <Talk
                                time = "12:00 - 12:10"
                                presenter = "Madhavan Mukund"
                                presenterLink = "#"
                            />
                            <Talk
                                time = "12:10 - 12:20"
                                presenter = "Supratik Chakraborty"
                                presenterLink = "#"
                            />
                            <Talk
                                time = "12:20 - 12:30"
                                presenter = "Ravindra Metta"
                                presenterLink = "#"
                            />
                            <Talk
                                time = "12:30 - 12:40"
                                label = "Open to Audience"
                            />
                        </div>
                    </div>
                </section>
            </p>
        </div>
    )
}
export default Special_session;



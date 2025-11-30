import { RiExternalLinkLine } from "react-icons/ri";

const Panel = () => {
  return (
    <div className="content">
      
      <p className="py-10 listLink">
        <h1 className="text-[27px] font-bold md-6">Panel Discussion</h1>
        <hr className="border-black pb-6"/>
        
         <h2 className="inline-block text-[20px] font-bold">Theme</h2>  
         <span className="block text-[17px] ml-[32px] mt-[7px]">Bridging PL Theory and Practice in the Age of AI</span> 
         {/*and the influence of AI in Software Engineering*/}
        <h2 className="text-[20px] font-bold mt-6 mb-2">Panelists</h2>
         
        <ul className="list-[square] space-y-2 ml-8">
          <li className="flex items-center">
            <img src={"../../images/Uday.png"} alt="ABC" width={100} height={100} className="rounded-full" />
            <div className="pl-4">
              <a href="https://www.cse.iitb.ac.in/~uday/" className="underline">Uday Khedker</a>
              <span className="block">IIT Bombay, India</span>
            </div>
            
          </li>
          <li className="flex items-center">
            <img src={"../../images/Uday.png"} alt="ABC" width={100} height={100} className="rounded-full" />
            <div className="pl-4">
              <a href="https://www.cse.iitb.ac.in/~uday/" className="underline">Pavithra Prabhakar</a>
              <span className="block">Kansas State University, USA</span>
            </div>            
          </li>
          <li className="flex items-center">
            <img src={"../../images/Uday.png"} alt="ABC" width={100} height={100} className="rounded-full" />
            <div className="pl-4">
              <a href="https://www.cse.iitb.ac.in/~uday/" className="underline">Subhajit Roy</a>
              <span className="block">IIT Kanpur, India</span>
            </div>
          </li>
          <li className="flex items-center">
            <img src={"../../images/Uday.png"} alt="ABC" width={100} height={100} className="rounded-full" />
            <div className="pl-4">
              <a href="https://www.cse.iitb.ac.in/~uday/" className="underline">R Venkatesh</a>
              <span className="block">TCS Research, India</span>
            </div>
          </li>
        </ul>
      </p>
    </div>
  )
};
export default Panel;
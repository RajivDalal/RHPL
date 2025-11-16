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
          <li>
            <a href="https://www.cse.iitb.ac.in/~uday/"><span className="underline">Uday Khedker</span> (IIT Bombay, India) </a>
          </li>
          <li>
            <a href="https://www.cs.ksu.edu/about/people/faculty/prabhakar/"><span className="underline"> Pavithra Prabhakar</span> (Kansas State University, USA) </a>
          </li>
          <li>
            <a href="https://www.cse.iitk.ac.in/users/subhajit/"><span className="underline"> Subhajit Roy</span> (IIT Kanpur, India) </a>
          </li>
          <li>
            <a href="https://ieeexplore.ieee.org/author/37667716900"><span className="underline"> R Venkatesh</span> (TCS Research, India) </a>
          </li>
        </ul>
      </p>
    </div>
  )
};
export default Panel;
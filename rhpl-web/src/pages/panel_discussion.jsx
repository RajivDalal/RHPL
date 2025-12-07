import React from 'react';
import { RiExternalLinkLine } from "react-icons/ri";
/* const Panel = () => {
  return (
    <div className="content">
      <p className="contain py-10 listLink">
        <h1 className="text-[27px] font-bold mb-6">Panel Discussion</h1>
        <hr className="border-black pb-6"/>
        
        <h2 className="inline-block text-[20px] font-bold">Theme</h2>  
        <span className="block text-[17px] ml-8 mt-2 mb-6">
          Bridging PL Theory and Practice in the Age of AI
        </span>
        
        <h2 className="text-[20px] font-bold mt-6 mb-2">Panelists</h2>
         
        <ul className="space-y-5 mt-3">
          <li className="flex items-center">
            <img 
              src="/images/Uday.png" 
              alt="Uday Khedker" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover"  
            />
            <div className="pl-4">
              <a 
                href="https://www.cse.iitb.ac.in/~uday/" 
                className="underline text-blue-700 hover:text-blue-900"
              >
                Uday Khedker
              </a>
              <span className="block">IIT Bombay, India</span>
            </div>
          </li>
          
          <li className="flex items-center">
            <img 
              src="/images/Pavithra1.png" 
              alt="Pavithra Prabhakar" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover"  
            />
            <div className="pl-4">
              <a 
                href="https://www.linkedin.com/in/pavithra-prabhakar-09273615?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdr9UpdgdR6%2BNBdn%2BtHEDdg%3D%3D" 
                className="underline text-blue-700 hover:text-blue-900"
              >
                Pavithra Prabhakar
              </a>
              <span className="block">Kansas State University, USA</span>
            </div>            
          </li>
          
          <li className="flex items-center">
            <img 
              src="/images/Subhajit.png" 
              alt="Subhajit Roy" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover"  
            />
            <div className="pl-4">
              <a 
                href="https://www.iitk.ac.in/dr-subhajit-roy" 
                className="underline text-blue-700 hover:text-blue-900"
              >
                Subhajit Roy
              </a>
              <span className="block">IIT Kanpur, India</span>
            </div>
          </li>
          
          <li className="flex items-center">
            <img 
              src=""
              alt=" R. Venkatesh"
              width={100} 
              height={100} 
              className="rounded-full" 
            />
            <div className="pl-4">
              <a 
                href="https://www.researchgate.net/profile/R-Venkatesh" 
                className="underline text-blue-700 hover:text-blue-900"
              >
                R Venkatesh
              </a>
              <span className="block">TCS Research, India</span>
            </div>
          </li>
        </ul>
      </p>
    </div>
  );
}; */



const Panel = () => {
  return (
    <div className="content">
      
      <p className="contain py-10 listLink">
        <h1 className="text-[27px] font-bold">Panel Discussion</h1>
      
      <hr className="border-black pb-6"/>
        
        <h2 className="inline-block text-[20px] font-bold">Theme</h2>  
        <span className="block text-[17px] ml-8 mt-2 mb-6">
          Bridging PL Theory and Practice in the Age of AI
        </span>
        <h2 className="inline-block text-[20px] font-bold mb-2">Panelists</h2>
        <ul className="list-[square] space-y-2 ml-8">
          <li>
            <a href="https://www.cse.iitb.ac.in/~uday/"  target="_blank" rel="noopener noreferrer"><span className="underline"> Uday Khedker</span> (IIT Bombay, India)</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pavithra-prabhakar-09273615?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdr9UpdgdR6%2BNBdn%2BtHEDdg%3D%3D"  target="_blank" rel="noopener noreferrer"><span className="underline"> Pavithra Prabhakar</span> (Kansas State University, USA) </a>
          </li>
          <li>
            <a href="https://www.iitk.ac.in/dr-subhajit-roy"  target="_blank" rel="noopener noreferrer"> <span className="underline">Subhajit Roy</span> (IIT Kanpur, India) </a>
          </li>
          <li>
            <a href="https://www.researchgate.net/profile/R-Venkatesh"  target="_blank" rel="noopener noreferrer"><span className="underline">R Venkatesh</span> (TCS Research, India) </a>
          </li>
        </ul>
        <h2 className="inline-block text-[20px] font-bold mt-3 mt-6">Panel Moderator</h2>
        <ul className="list-[square] space-y-2 ml-8 mt-2">
         <li><a href="https://www.comp.nus.edu.sg/~umathur/"  target="_blank" rel="noopener noreferrer"><span className="underline"> Umang Mathur</span> (NUS, Singapore) </a></li>
        </ul>
      </p>
    </div>
  )
};

export default Panel;
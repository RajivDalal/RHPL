import React from 'react';
import { RiExternalLinkLine } from "react-icons/ri";
import UdayImage from '../images/Uday.png';
import PavithraImage from '../images/Pavithra1.png';
import SubhajitImage from '../images/Subhajit.png';
import UmangImage from '../images/Umang.png';
import VenkateshImage from '../images/Venkatesh.jpeg';

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
        <ul className="space-y-2 ml-3">
          <li>
            <img 
              src={UdayImage} 
              alt="Uday Khedkar" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover inline-block"   
            />
            <div className="inline-block pl-4 align-middle">
              <a href="https://www.cse.iitb.ac.in/~uday/" target="_blank" rel="noopener noreferrer" className="underline">Uday Khedker</a>
              <br />
              <span className="text-sm text-gray-600">IIT Bombay, India</span>
            </div>
          </li>
          <li>
            <img 
              src={PavithraImage} 
              alt="Pavithra Prabhakar" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover inline-block"  
            />
            <div className="inline-block pl-4 align-middle">
              <a href="https://people.cs.ksu.edu/%7Epprabhakar/" target="_blank" rel="noopener noreferrer" className="underline">Pavithra Prabhakar</a>
              <br />
              <span className="text-sm text-gray-600">Kansas State University, USA</span>
            </div>
          </li>
          <li>
            <img 
              src={SubhajitImage} 
              alt="Subhajit Roy" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover inline-block"  
            />
            <div className="inline-block pl-4 align-middle">
              <a href="https://www.iitk.ac.in/dr-subhajit-roy" target="_blank" rel="noopener noreferrer" className="underline">Subhajit Roy</a>
              <br />
              <span className="text-sm text-gray-600">IIT Kanpur, India</span>
            </div>
          </li>
          <li>
            <img 
              src={VenkateshImage}
              alt="R Venkatesh" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover inline-block"  
            />
            <div className="inline-block pl-4 align-middle">
              <a href="https://www.researchgate.net/profile/R-Venkatesh" target="_blank" rel="noopener noreferrer" className="underline">R Venkatesh</a>
              <br />
              <span className="text-sm text-gray-600">TCS Research, India</span>
            </div>
          </li>
        </ul>
        
        <h2 className="inline-block text-[20px] font-bold mt-3">Panel Moderator</h2>
        <ul className="space-y-2 ml-3 mt-2">
          <li>
            <img 
              src={UmangImage} 
              alt="Umang Mathur" 
              width={100} 
              height={100} 
              className="rounded-full w-[100px] h-[100px] object-cover inline-block"  
            />
            <div className="inline-block pl-4 align-middle">
              <a href="https://www.comp.nus.edu.sg/~umathur/" target="_blank" rel="noopener noreferrer" className="underline">Umang Mathur</a>
              <br />
              <span className="text-sm text-gray-600">NUS, Singapore</span>
            </div>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Panel;
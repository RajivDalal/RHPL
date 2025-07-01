
import { Link,NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {

  const [isBGClicked,setIsBGClicked] = useState(false);
  const handleBGClick = () => {
    setIsBGClicked(!isBGClicked);
  }

  return(
    <>
    <nav className="sticky top-0 bg-[#0b2545] text-white pt-3 pb-4 shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
      <div className="flex justify-between items-center px-[2%] xl:px-[5%] min-[1320]:px-[7%] 2xl:px-[10%]">
        <NavLink to="/" className="text-3xl font-share-mono [word-spacing:-10px]">RHPL 2025</NavLink>
        
        {/* Links */}
        <div className="navmenu hidden lg:flex justify-center items-center md:space-x-0 lg:space-x-5 xl:space-x-7 lg:text-[1.25rem] text-center font-share">
          <NavLink to="/venue">Venue</NavLink>
          <NavLink to="/important_dates">Important Dates</NavLink>
          <NavLink to="/submit_proposal">Submit a proposal</NavLink>
          <NavLink to="/organizers">Organizers</NavLink>
          <NavLink to="/previous_editions">Previous Editions</NavLink>
          <div className='relative inline-block'>
            <button onClick={handleBGClick} className='border-none flex justify-center'><GiHamburgerMenu /></button>
            <ul className={`absolute right-0 bg-black min-w-48 z-1 mt-[1.6rem] py-5 space-y-1 ${isBGClicked?"block":"hidden"}`}>
              <li><NavLink className='' to="/registration">Registration</NavLink></li>
              <li><NavLink className='' to="/programme">Programme</NavLink></li>
              <li><NavLink className='' to="/approved_proposals">Approved Proposals</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
 )
};

export default Navbar;

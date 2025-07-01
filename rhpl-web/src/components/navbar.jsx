
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
        <div className="navmenu flex justify-center items-center space-x-5 lg:text-[1.25rem] text-center font-share">
          <div className='hidden lg:flex space-x-5'>
            <NavLink to="/venue">Venue</NavLink>
            <NavLink to="/important_dates">Important Dates</NavLink>
            <NavLink to="/submit_proposal">Submit a proposal</NavLink>
            <NavLink to="/organizers">Organizers</NavLink>
            <NavLink to="/previous_editions">Previous Editions</NavLink>
          </div>
          <div className='relative inline-block'>
            <button onClick={handleBGClick} className={`border-none flex justify-center pb-[0.15rem]`}><GiHamburgerMenu/></button>
            <ul className={`hidden md:block navlist transition ease-in-out duration-200 space-y-2 rounded-md ${isBGClicked?"opacity-100 translate-y-1":"opacity-0"}`}>
              <li><NavLink to="/registration">Registration</NavLink></li>
              <li><NavLink to="/programme">Programme</NavLink></li>
              <li><NavLink to="/approved_proposals">Approved Proposals</NavLink></li>
            </ul>
            <ul className={`block lg:hidden navlist transition ease-in-out duration-200 space-y-2 rounded-md ${isBGClicked?"opacity-100 translate-y-1":"opacity-0"}`}>
              <li><NavLink to="/venue">Venue</NavLink></li>
              <li><NavLink to="/important_dates">Important Dates</NavLink></li>
              <li><NavLink to="/submit_proposal">Submit a proposal</NavLink></li>
              <li><NavLink to="/organizers">Organizers</NavLink></li>
              <li><NavLink to="/previous_editions">Previous Editions</NavLink></li>
              <li><NavLink to="/registration">Registration</NavLink></li>
              <li><NavLink to="/programme">Programme</NavLink></li>
              <li><NavLink to="/approved_proposals">Approved Proposals</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
 )
};

export default Navbar;

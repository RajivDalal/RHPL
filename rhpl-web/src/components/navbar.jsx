
import { Link,NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {

  const [isBGClicked,setIsBGClicked] = useState(false);
  const handleBGClick = () => {
    setIsBGClicked(!isBGClicked);
  }

  const handleLinkClick = () => {
    setIsBGClicked(false);
  }

  return(
    <>
    <nav className="sticky top-0 bg-[#0b2545] text-white py-3 shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
      <div className="navmenu flex justify-between items-center px-[2%] xl:px-[5%] min-[1320]:px-[7%] 2xl:px-[10%]">
        <NavLink to="/" onClick={handleLinkClick}  className="md:text-3xl text-[1.7rem] font-share-mono [word-spacing:-10px]">RHPL 2025</NavLink>
        
        {/* Links */}
        <div className="flex justify-center items-center space-x-5 lg:text-[1.25rem] text-center font-share">
          <div className='hidden lg:flex space-x-5'>
            <NavLink onClick={handleLinkClick} to="/venue">Venue</NavLink>
            
            <NavLink onClick={handleLinkClick} to="/registration">Registration</NavLink>
            <NavLink onClick={handleLinkClick} to="/organizers">Organizers</NavLink>
            
            <NavLink onClick={handleLinkClick} to="/approved_proposals">Approved Proposals</NavLink>
          </div>
          <div className='relative inline-block'>
            <button onClick={handleBGClick} className={`border-none flex justify-center pb-[0.15rem]`}><GiHamburgerMenu/></button>
            <ul className={`hidden lg:block navlist transition ease-in-out duration-200 space-y-2 rounded-md ${isBGClicked?"opacity-100 translate-y-1":"opacity-0 pointer-events-none"}`}>
              <li><NavLink onClick={handleLinkClick} to="/previous_editions">Previous Editions</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/programme">Programme</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/submit_proposal">Submit a proposal</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/important_dates">Important Dates</NavLink></li>
            </ul>
            <ul className={`block lg:hidden w-[100vw] navlist transition ease-in-out duration-200 space-y-2 rounded-md ${isBGClicked?"opacity-100 translate-y-1":"opacity-0 pointer-events-none"}`}>
              <li><NavLink onClick={handleLinkClick} to="/venue">Venue</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/important_dates">Important Dates</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/submit_proposal">Submit a proposal</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/organizers">Organizers</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/previous_editions">Previous Editions</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/registration">Registration</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/programme">Programme</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="/approved_proposals">Approved Proposals</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
 )
};

export default Navbar;

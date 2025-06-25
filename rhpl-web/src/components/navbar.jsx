
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
    <nav className="sticky top-0 bg-[#0b2545] text-white px-[10rem] pt-3 pb-4 shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-share-mono [word-spacing:-10px]">RHPL 2025</NavLink>
        
        {/* Links */}
        <div className="navmenu flex justify-center items-center space-x-7 text-[1.25rem] font-share">
          <NavLink to="/venue">Venue</NavLink>
          <NavLink to="/important_dates">Important Dates</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/programme">Programme</NavLink>
          <NavLink to="/approved_proposals">Approved Proposals</NavLink>
          <NavLink to="/organizers">Organizers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/previous_editions">Previous Editions</NavLink>
        </div>
      </div>
    </nav>
    </>
 )
};

export default Navbar;

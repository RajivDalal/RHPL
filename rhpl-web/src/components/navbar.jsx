import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import logo from '../images/logo.png';

const navLinkClass = (isActive, mobile = false) =>
  `block px-4 py-2.5 font-medium tracking-[0.04em] uppercase no-underline transition-colors
  ${mobile ? "text-[18px]" : "text-[18px]"}
  ${isActive ? "text-[#b43d00] bg-[#ced9e6]/80" : "text-[#2b3442] hover:bg-[#cfd8e3]/70 hover:text-[#b43d00]"}`;

const DropdownItem = ({ to, label, mobile = false, onClick }) => (
  <li>
    <NavLink to={to} onClick={onClick}
      className={({ isActive }) => navLinkClass(isActive, mobile)}>
      {label}
    </NavLink>
  </li>
);

const Navbar = () => {
  const [isBGClicked, setIsBGClicked] = useState(false);
  const handleBGClick = () => setIsBGClicked(!isBGClicked);
  const handleLinkClick = () => setIsBGClicked(false);

  const desktopLinks = [
    { to: "/venue", label: "Venue" },
    { to: "/important_dates", label: "Important Dates" },
    { to: "/submit_proposal", label: "Submit a Proposal" },
    { to: "/organizers", label: "Organizers" },
    { to: "/previous_editions", label: "Previous Editions" },
    // { to: "/registration", label: "Registration" },
    // { to: "/local_information", label: "Local Information" },
  ];

  const desktopDropdown = [
    { to: "/important_dates", label: "Important Dates" },
    { to: "/venue", label: "Venue" },
    { to: "/gallery", label: "Gallery" },
  ];

  const mobileDropdown = [
    { to: "/venue", label: "Venue" },
    // { to: "/local_information", label: "Local Information" },
    { to: "/important_dates", label: "Important Dates" },
    { to: "/submit_proposal", label: "Submit a Proposal"},
    { to: "/organizers", label: "Organizers" },
    // { to: "/gallery", label: "Gallery" },
    { to: "/previous_editions", label: "Previous Editions" },
    // { to: "/registration", label: "Registration" },
  ];

  return (
    <nav className="sticky top-0 bg-[#e9eef7]/85 backdrop-blur-md text-[#2b3442]
border-[#d6dbe3]/70 py-2 shadow-[0_2px_10px_rgba(15,23,42,0.16)] border-b z-40">
      <div className="
    w-full
    mx-auto
    flex
    justify-between
    items-center
    px-6
    lg:px-12
">

        <NavLink to="/" onClick={handleLinkClick} className="flex items-center">
          <img src={logo} alt="RHPL Logo" className="h-8 lg:h-10 w-auto max-w-full object-contain" />
        </NavLink>

        <div className="flex justify-center items-center space-x-6 text-center">

          {/* Desktop nav links */}
          <div className='hidden lg:flex space-x-6 items-center'>
            {desktopLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={handleLinkClick}
                className={({ isActive }) => `nav-link-rhpl text-[18px]${isActive ? " active" : ""}`}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger + dropdowns */}
          <div className='relative inline-block lg:hidden'>
            <button onClick={handleBGClick}
              className={`border-none flex items-center justify-center p-2 rounded-lg transition-all duration-200 text-[#2b3442] hover:text-[#b43d00] hover:bg-[#ff8c00]/10 border ${isBGClicked ? "bg-[#ff8c00]/10 border-[#ff8c00]/30 text-[#cc5500]" : "bg-transparent border-transparent"}`}>
              {isBGClicked ? <IoClose className="text-xl" /> : <GiHamburgerMenu className="text-lg" />}
            </button>

            {/* Desktop dropdown
            <ul className={`hidden lg:block absolute right-0 top-full mt-3 bg-white/95 backdrop-blur-md border border-black/5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] min-w-[200px] p-1.5 transition ease-in-out duration-200 ${isBGClicked ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              {desktopDropdown.map(({ to, label }) => (
                <DropdownItem key={to} to={to} label={label} onClick={handleLinkClick} />
              ))}
            </ul> */}

            {/* Mobile dropdown */}
            <ul className={`block lg:hidden w-[calc(100vw-32px)] fixed right-4 top-[72px] bg-white/95 backdrop-blur-md border border-black/5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-1.5 transition ease-in-out duration-200 ${isBGClicked ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              {mobileDropdown.map(({ to, label }) => (
                <DropdownItem key={to} to={to} label={label} mobile onClick={handleLinkClick} />
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
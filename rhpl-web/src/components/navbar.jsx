import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import logo from '../images/logo.png';

const navLinkClass = (isActive, mobile = false) =>
  `block px-4 py-2.5 font-medium tracking-[0.04em] uppercase no-underline transition-colors
  ${mobile ? "text-[16px]" : "text-[16px]"}
  ${isActive ? "text-[#9b4500] bg-[#fff8f4]" : "text-[#45464d] hover:bg-[#f2f4f6] hover:text-[#9b4500]"}`;

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
    { to: "/registration", label: "Registration" },
    { to: "/local_information", label: "Local Information" },
    { to: "/organizers", label: "Organizers" },
  ];

  const desktopDropdown = [
    { to: "/important_dates", label: "Important Dates" },
    { to: "/venue", label: "Venue" },
    { to: "/previous_editions", label: "Previous Editions" },
  ];

  const mobileDropdown = [
    { to: "/venue", label: "Venue" },
    { to: "/local_information", label: "Local Information" },
    { to: "/important_dates", label: "Important Dates" },
    { to: "/organizers", label: "Organizers" },
    { to: "/previous_editions", label: "Previous Editions" },
    { to: "/registration", label: "Registration" },
  ];

  return (
    <nav className="sticky top-0 bg-[#dfe7f1] text-[#2b3442]
border-[#cfd8e3] py-2 shadow-[0_2px_10px_rgba(15,23,42,0.07)] border-b z-40">
      <div className="
    max-w-[1240px]
    mx-auto
    flex
    justify-between
    items-center
    px-6
">

        <NavLink to="/" onClick={handleLinkClick}>
          <img src={logo} alt="RHPL Logo" className="h-14 lg:h-[58px] w-auto" />
        </NavLink>

        <div className="flex justify-center items-center space-x-6 text-center">

          {/* Desktop nav links */}
          <div className='hidden lg:flex space-x-5 items-center'>
            {desktopLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={handleLinkClick}
                className={({ isActive }) => `nav-link-rhpl text-[16.5px]${isActive ? " active" : ""}`}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger + dropdowns */}
          <div className='relative inline-block'>
            <button onClick={handleBGClick}
              className="border-none flex justify-center pb-[0.15rem] text-[#45464d] hover:text-[#9b4500] transition-colors text-lg">
              <GiHamburgerMenu />
            </button>

            {/* Desktop dropdown */}
            <ul className={`hidden lg:block absolute right-0 top-full mt-2 bg-white border border-[#c6c6cd] rounded-lg shadow-[0_8px_24px_rgba(15,23,42,0.12)] min-w-[180px] py-1 transition ease-in-out duration-200 ${isBGClicked ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"}`}>
              {desktopDropdown.map(({ to, label }) => (
                <DropdownItem key={to} to={to} label={label} onClick={handleLinkClick} />
              ))}
            </ul>

            {/* Mobile dropdown */}
            <ul className={`block lg:hidden w-[100vw] absolute right-0 top-full mt-2 bg-white border border-[#c6c6cd] shadow-[0_8px_24px_rgba(15,23,42,0.12)] py-1 transition ease-in-out duration-200 ${isBGClicked ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"}`}>
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
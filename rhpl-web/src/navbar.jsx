import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
    <nav className=" bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          RHPL
        </Link>
        <div className="flex justify-center items-center space-x-6">
          <Link to="/venue">Venue</Link>
          <Link to="/important_dates">Important Dates</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/programme">Programme</Link>
          <Link to="/posters">Posters</Link>
          <Link to="/organizers">Organizers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/previous_editions">Previous Editions</Link>
        </div>
      </div>
    </nav>
    </>
 )
};

export default Navbar;

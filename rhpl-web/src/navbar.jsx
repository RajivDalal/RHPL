import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
    <div className=""></div>
    <nav className="sticky">
      <Link to="/venue">Venue</Link>
      <Link to="/important_dates">Important Dates</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/programme">Programme</Link>
      <Link to="/posters">Posters</Link>
      <Link to="/organizers">Organizers</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/previous_editions">Previous Editions</Link>
    </nav>
    </>
 )
};

export default Navbar;

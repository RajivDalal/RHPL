import React, { useState, useEffect, useRef } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Banner from './components/banner.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Venue from './pages/venue.jsx';
import Submit_proposal from './pages/submit_proposal.jsx';
import Contact from './pages/contact.jsx';
import Previous_Editions from './pages/prev_editions.jsx';
import Approved_proposals from './pages/approved_proposals.jsx';
import Registration from './pages/registration.jsx';
import Programme from './pages/programme.jsx';
import Organizers from './pages/organizers.jsx';
import Important_dates from './pages/imp_dates.jsx';
import ContactButton from './components/contactButton.jsx';
import Footer from './components/footer.jsx';

import { Link, Element } from 'react-scroll';

function App() {

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const footerRef = useRef(null);

  const handleScroll = () => {
    if (footerRef.current) {
      const footerPosition = footerRef.current.getBoundingClientRect();
      console.log('Footer Position:', footerPosition);
      if (footerPosition.top <= window.innerHeight) {
        setIsButtonVisible(false);
      } else {
        setIsButtonVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Banner />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />}/>
        <Route path="/organizers" element={<Organizers />}/>
        <Route path="/submit_proposal" element={<Submit_proposal />}/>
        <Route path="/approved_proposals" element={<Approved_proposals />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/previous_editions" element={<Previous_Editions />}/>
        <Route path="/programme" element={<Programme />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/important_dates" element={<Important_dates />}/>
      </Routes>
      <Link to="footer" className={`transition ease-in-out duration-[50] ${isButtonVisible?'opacity-100':' opacity-0'}`} smooth={true} duration={500}>
        <ContactButton />
      </Link>
      <Element name="footer">
        <div ref={footerRef}>
          <Footer />
        </div>
      </Element>
    </Router>
  );
}

export default App

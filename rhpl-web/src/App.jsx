import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Banner from './components/banner.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Venue from './pages/venue.jsx';
import Contact from './pages/contact.jsx';
import Previous_Editions from './pages/prev_editions.jsx';
import Approved_proposals from './pages/approved_proposals.jsx';
import Registration from './pages/registration.jsx';
import Programme from './pages/programme.jsx';
import Organizers from './pages/organizers.jsx';
import Important_dates from './pages/imp_dates.jsx';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />}/>
        <Route path="/organizers" element={<Organizers />}/>
        <Route path="/approved_proposals" element={<Approved_proposals />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/previous_editions" element={<Previous_Editions />}/>
        <Route path="/programme" element={<Programme />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/important_dates" element={<Important_dates />}/>
      </Routes>
    </Router>
  );
}

export default App

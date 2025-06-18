import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './navbar.jsx';
import Venue from '/pages/venue.jsx';
import Contact from '/pages/contact.jsx';
import Previous_Editions from '/pages/prev_editions.jsx';
import Posters from '/pages/posters.jsx';
import Registration from '/pages/registration.jsx';
import Programme from '/pages/programme.jsx';
import Organizers from '/pages/organizers.jsx';
import Important_dates from '/pages/imp_dates.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/venue" element={<Venue />}/>
        <Route path="/organizers" element={<Organizers />}/>
        <Route path="/posters" element={<Posters />}/>
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

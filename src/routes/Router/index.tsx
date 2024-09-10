import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard }   from '../../pages/Dashboard';
import { Contact }   from '../../pages/Contact';
import { About }   from '../../pages/About';
import { Home }   from '../../pages/Home';
import Navbar from '../../components/Navbar';


export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
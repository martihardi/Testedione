import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard }   from '../../pages/Dashboard';
import Navbar from '../../components/Navbar';


export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
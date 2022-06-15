import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import AddPage from './components/AddPage/AddPage';
import TicketList from './components/Ticket/TicketList';
import Reservation from './components/Reservation/Reservation';

function App() {
  return (
    <Router>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/ticket" element={<TicketList />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes> 

      
    </Router>
  );
}

export default App;
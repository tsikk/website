import React from "react";
import { Router as Router, Routes, Route, Link } from "react-router-dom";
import IpReservationsPage from "./pages/IpReservationsPage";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/ip-reservation">IP Reservations</Link>
        <a
          href="/data/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to the site!</div>} />
        <Route path="/ip-reservations" element={<IpReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

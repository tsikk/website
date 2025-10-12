import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IpReservationsPage from "./pages/IpReservationsPage";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <a href="/">Home</a>
        <a href="/ip-reservation">IP Reservations</a>
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
        <Route path="/ip-reservation" element={<IpReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

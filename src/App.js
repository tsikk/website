import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IpReservationsPage from "./data/IpReservationsPage";

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

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
        <Route path="/" element={<Home />} />
        <Route path="/ip-reservation" element={<IpReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

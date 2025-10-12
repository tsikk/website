import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IpReservationsPage from "./pages/IpReservationsPage";

function App() {
  return (
    <Router>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <a
          href="/data/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "#1976d2",
            fontSize: "1.2rem"
          }}
        >
          View My Resume
        </a>
      </header>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/ip-reservations">IP Reservations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to the site!</div>} />
        <Route path="/ip-reservations" element={<IpReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

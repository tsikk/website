import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IpReservationsPage from "./pages/IpReservationsPage";

function App() {
  return (
    <Router>
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

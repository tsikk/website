import React from "react";
import ipReservations from "../data/ipReservations";

const IpReservationsPage = () => (
  <div style={{ padding: "2rem" }}>
    <h1>IP Reservations</h1>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>IP Address</th>
          <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Name</th>
          <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {ipReservations.map((item) => (
          <tr key={item.ip}>
            <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{item.ip}</td>
            <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{item.name}</td>
            <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default IpReservationsPage;

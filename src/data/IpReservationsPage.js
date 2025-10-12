import React from "react";
import ipReservations from "./ipReservations";

function IpReservationsPage() {
  return (
    <div>
      <h1>IP Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ipReservations.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.ip}</td>
              <td>{entry.name}</td>
              <td>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IpReservationsPage;
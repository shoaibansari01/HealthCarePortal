import React from "react";
import "./DoctorDashboard.css";

function DoctorDashboard() {
  // Simulated appointment data (you would typically fetch this from an API)
  const totalAppointments = 42;

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-container">
        <div className="appointment-card">
          <div className="appointment-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="appointment-icon"
            >
              <path d="M16 2v4h-8v-4" />
              <path d="M16 2h3a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h3" />
              <path d="M7 4v4h10v-4" />
              <line x1="12" y1="11" x2="12" y2="16" />
              <line x1="9" y1="14" x2="15" y2="14" />
            </svg>
          </div>
          <div className="appointment-details">
            <h3 className="appointment-title">Total Appointments</h3>
            <div className="appointment-count">{totalAppointments}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;

import React from "react";
import "./AdminDashboard.css";
import {
  Users,
  Calendar,
  Award,
  ArrowUp,
  ArrowDown,
  Stethoscope,
} from "lucide-react";

const AdminDashboard = () => {
  // Example data - replace with real data from your backend
  const stats = {
    doctors: {
      count: 10,
      change: 2,
      trend: "up",
    },
    users: {
      count: 150,
      change: 15,
      trend: "up",
    },
    appointments: {
      count: 48,
      change: 5,
      trend: "down",
    },
    specialists: {
      count: 6,
      change: 1,
      trend: "up",
    },
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, Admin</p>
      </div>

      <div className="stats-grid">
        {/* Doctors Card */}
        <div className="stat-card">
          <div className="stat-icon doctor">
            <Stethoscope size={24} />
          </div>
          <div className="stat-details">
            <h3>Total Doctors</h3>
            <div className="stat-number">
              <span className="count">{stats.doctors.count}</span>
              <div className={`trend ${stats.doctors.trend}`}>
                {stats.doctors.trend === "up" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span>{stats.doctors.change}</span>
              </div>
            </div>
            <p className="stat-label">Active Medical Professionals</p>
          </div>
        </div>

        {/* Users Card */}
        <div className="stat-card">
          <div className="stat-icon users">
            <Users size={24} />
          </div>
          <div className="stat-details">
            <h3>Total Users</h3>
            <div className="stat-number">
              <span className="count">{stats.users.count}</span>
              <div className={`trend ${stats.users.trend}`}>
                {stats.users.trend === "up" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span>{stats.users.change}</span>
              </div>
            </div>
            <p className="stat-label">Registered Patients</p>
          </div>
        </div>

        {/* Appointments Card */}
        <div className="stat-card">
          <div className="stat-icon appointments">
            <Calendar size={24} />
          </div>
          <div className="stat-details">
            <h3>Appointments</h3>
            <div className="stat-number">
              <span className="count">{stats.appointments.count}</span>
              <div className={`trend ${stats.appointments.trend}`}>
                {stats.appointments.trend === "up" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span>{stats.appointments.change}</span>
              </div>
            </div>
            <p className="stat-label">Active Bookings</p>
          </div>
        </div>

        {/* Specialists Card */}
        <div className="stat-card">
          <div className="stat-icon specialists">
            <Award size={24} />
          </div>
          <div className="stat-details">
            <h3>Specialists</h3>
            <div className="stat-number">
              <span className="count">{stats.specialists.count}</span>
              <div className={`trend ${stats.specialists.trend}`}>
                {stats.specialists.trend === "up" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span>{stats.specialists.change}</span>
              </div>
            </div>
            <p className="stat-label">Specialized Departments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

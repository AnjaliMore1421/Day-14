import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link to="profile">Profile</Link>
          <Link to="settings">Settings</Link>
          <Link to="reports">Reports</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;

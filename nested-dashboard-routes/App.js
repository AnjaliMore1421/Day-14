import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Overview from "./Overview";
import Profile from "./Profile";
import Settings from "./Settings";
import Reports from "./Reports";
import "./App.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Dashboard App</h1>
      <p>React Router v6 Nested Routes Demo</p>

      <Link to="/dashboard" className="dashboard-btn">
        Go to Dashboard
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

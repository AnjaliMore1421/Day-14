import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
    </nav>
  );
}

export default Navbar;

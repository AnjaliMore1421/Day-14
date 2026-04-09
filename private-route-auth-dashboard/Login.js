import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div className="card">
      <h2>Login Page</h2>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;

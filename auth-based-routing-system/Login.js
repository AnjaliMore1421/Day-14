import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="page-card">
      <h2>Login Page</h2>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;

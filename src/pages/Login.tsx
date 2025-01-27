import React from "react";
import { signInWithGoogle } from "../services/AuthService";

const Login: React.FC = () => {
  const handleLogin = async () => {
    await signInWithGoogle();
    window.location.href = "/home";
  };

  return (
    <div className="login-container">
      <h1>Task Manager</h1>
      <button className="login-button" onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;

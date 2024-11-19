import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Freedom to Stream</h1>
        <p>All the video content you enjoy in one place</p>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
      </form>
    </div>
  );
}

export default Login;

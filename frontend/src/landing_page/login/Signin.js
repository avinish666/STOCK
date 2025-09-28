import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://stock-2-2108.onrender.com/api/login",   // ✅ deployed backend
        { email, password }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setIsSuccess(true);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = `https://dashboard-8xcp.onrender.com/?token=${res.data.token}`; // ✅ deployed dashboard
        }, 1000);
      } else {
        setIsSuccess(false);
        setMessage(res.data.message);
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        {message && (
          <p className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </p>
        )}
        <p>
          Don’t have an account?{" "}
          <span
            onClick={() =>
              (window.location.href = "https://stockk-opwe.onrender.com/signup") // ✅ deployed signup page
            }
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;

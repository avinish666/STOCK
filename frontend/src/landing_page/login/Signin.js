import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://stock-2-2108.onrender.com/api/login", // ✅ deployed backend
        { email, password }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setIsSuccess(true);
        setMessage("Login successful! Redirecting...");

        setTimeout(() => {
          window.location.href = "https://dashboard-8xcp.onrender.com/dashboard"; // ✅ no token in URL
        }, 1500);
      } else {
        setIsSuccess(false);
        setMessage(res.data.message || "Login failed");
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage(err.response?.data?.message || "Signin failed");
    } finally {
      setLoading(false);
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
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {message && (
          <p className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </p>
        )}

        <p className="redirect">
          Don’t have an account?{" "}
          <span
            onClick={() =>
              (window.location.href = "https://dashboard-8xcp.onrender.com/signup")
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



import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://stock-2-2108.onrender.com/api/signup",
        { email, password }
      );

      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "https://stockk-opwe.onrender.com/login";
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="redirect">
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://stockk-opwe.onrender.com/login")
            }
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;

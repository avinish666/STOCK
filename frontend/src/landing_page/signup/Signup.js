import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://stock-2-2108.onrender.com/api/signup",  // ✅ deployed backend
        { email, password }
      );

      // ✅ redirect to deployed frontend login
      window.location.href = "https://stockk-opwe.onrender.com/login";
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed!");
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
          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="redirect">
          Already have an account?{" "}
          <span
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

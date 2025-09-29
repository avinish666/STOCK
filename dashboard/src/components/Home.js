
import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");

    // ✅ Store token from URL on first login
    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);

      // ✅ Clean up the URL (remove token param)
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // ✅ Check if token exists in localStorage
    const token = localStorage.getItem("token");

    // ❌ If no token, redirect to signin page
    if (!token) {
      setTimeout(() => {
        window.location.href = "https://stockk-opwe.onrender.com/signin";
      }, 500); // Small delay to prevent abrupt redirect
    }

    // ✅ (Optional) You can add token validation logic here if needed
    // Example: Call backend /verifyToken endpoint to ensure it's still valid
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

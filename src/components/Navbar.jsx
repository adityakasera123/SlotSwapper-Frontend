// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">SlotSwapper 🔄</h1>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/swappable" className="hover:text-gray-200">
            Swappable
          </Link>
          <Link to="/requests" className="hover:text-gray-200">
            Requests
          </Link>

          {/* ✅ User name bubble */}
          {userName && (
            <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-full font-medium shadow">
              <span className="w-6 h-6 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full font-bold">
                {userName.charAt(0).toUpperCase()}
              </span>
              <span>{userName}</span>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

// src/pages/SwapRequests.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function SwapRequests() {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchRequests = async () => {
    const res = await fetch(`${API_URL}/api/swaps`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setRequests(data);
  };

  const handleResponse = async (id, accept) => {
    await fetch(`${API_URL}/api/swap-response/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ accept }),
    });
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">🔁 Swap Requests</h1>

        {requests.length === 0 ? (
          <p className="text-gray-600">No swap requests yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {requests.map((req) => (
              <div key={req._id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Request from: {req.fromUser?.name || "Unknown"}
                </h3>
                <p className="text-sm text-gray-600">
                  <b>Your Slot:</b> {req.theirSlot?.title}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <b>Their Slot:</b> {req.mySlot?.title}
                </p>
                <p
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                    req.status === "PENDING"
                      ? "bg-yellow-200 text-yellow-800"
                      : req.status === "ACCEPTED"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {req.status}
                </p>

                {req.status === "PENDING" && (
                  <div className="mt-3 flex space-x-2">
                    <button
                      onClick={() => handleResponse(req._id, true)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      ✅ Accept
                    </button>
                    <button
                      onClick={() => handleResponse(req._id, false)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      ❌ Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

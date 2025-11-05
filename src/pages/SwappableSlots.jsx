// src/pages/SwappableSlots.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function SwappableSlots() {
  const [myEvents, setMyEvents] = useState([]);
  const [swappableSlots, setSwappableSlots] = useState([]);
  const [mySlotId, setMySlotId] = useState("");
  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_URL;

  // ✅ Fetch My Events
  const fetchMyEvents = async () => {
    const res = await fetch(`${API_URL}/api/events`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setMyEvents(data.filter((e) => e.status === "SWAPPABLE"));
  };

  // ✅ Fetch Other Users’ Swappable Slots
  const fetchSwappableSlots = async () => {
    const res = await fetch(`${API_URL}/api/swappable-slots`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setSwappableSlots(data);
  };

  // ✅ Send Swap Request
  const sendSwapRequest = async (theirSlotId) => {
    if (!mySlotId) return alert("Select your slot first!");
    await fetch(`${API_URL}/api/swap-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mySlotId, theirSlotId }),
    });
    alert("✅ Swap Request Sent!");
  };

  useEffect(() => {
    fetchMyEvents();
    fetchSwappableSlots();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">🔁 Swappable Slots</h1>

        {/* My Slots Selector */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Choose one of your swappable slots
          </h2>
          <select
            onChange={(e) => setMySlotId(e.target.value)}
            className="border rounded p-2 w-full mb-3"
          >
            <option value="">Select Your Slot</option>
            {myEvents.map((e) => (
              <option key={e._id} value={e._id}>
                {e.title} ({new Date(e.startTime).toLocaleString()})
              </option>
            ))}
          </select>
        </div>

        {/* Swappable Slots List */}
        <div className="grid md:grid-cols-2 gap-4">
          {swappableSlots.length === 0 ? (
            <p className="text-gray-600">No swappable slots available yet.</p>
          ) : (
            swappableSlots.map((slot) => (
              <div key={slot._id} className="border rounded-lg p-4 bg-white shadow">
                <h3 className="font-semibold text-gray-800">{slot.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {new Date(slot.startTime).toLocaleString()} -{" "}
                  {new Date(slot.endTime).toLocaleString()}
                </p>
                <button
                  onClick={() => sendSwapRequest(slot._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  🔄 Request Swap
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

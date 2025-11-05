// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import EventCard from "../components/EventCard.jsx";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  // ✅ Fetch All Events
  const fetchEvents = async () => {
    const res = await fetch(`${API_URL}/api/events`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setEvents(data);
  };

  // ✅ Create New Event
  const createEvent = async () => {
    await fetch(`${API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, startTime, endTime }),
    });
    setTitle("");
    setStartTime("");
    setEndTime("");
    fetchEvents();
  };

  // ✅ Make Event Swappable
  const makeSwappable = async (id) => {
    await fetch(`${API_URL}/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: "SWAPPABLE" }),
    });
    fetchEvents(); // refresh list
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">📅 My Events</h1>

        {/* Create Event Form */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-semibold mb-3 text-gray-700">Create New Event</h2>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            onClick={createEvent}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Create Event
          </button>
        </div>

        {/* Events List */}
        <div className="grid md:grid-cols-2 gap-4">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onMakeSwappable={makeSwappable} // ✅ added function
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// src/components/EventCard.jsx
import React from "react";

export default function EventCard({ event, onMakeSwappable }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white">
      <h2 className="font-semibold text-lg text-gray-800">{event.title}</h2>
      <p className="text-sm text-gray-600">
        🕒 {new Date(event.startTime).toLocaleString()} -{" "}
        {new Date(event.endTime).toLocaleString()}
      </p>
      <p
        className={`mt-2 inline-block px-2 py-1 rounded text-xs font-semibold ${
          event.status === "BUSY"
            ? "bg-gray-300 text-gray-700"
            : event.status === "SWAPPABLE"
            ? "bg-green-200 text-green-700"
            : "bg-yellow-200 text-yellow-700"
        }`}
      >
        {event.status}
      </p>

      {event.status === "BUSY" && (
        <button
          onClick={() => onMakeSwappable(event._id)}
          className="block mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          🔁 Make Swappable
        </button>
      )}
    </div>
  );
}

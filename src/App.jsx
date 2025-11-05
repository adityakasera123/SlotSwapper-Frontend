import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SwappableSlots from "./pages/SwappableSlots.jsx"; // ✅ new import
import SwapRequests from "./pages/SwapRequests.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/swappable" element={<SwappableSlots />} /> {/* ✅ new route */}
        <Route path="/requests" element={<SwapRequests />} />
      </Routes>
    </Router>
  );
}

export default App;

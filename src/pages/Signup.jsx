// src/pages/Signup.jsx
import { useState } from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import { signupUser } from "../api";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const result = await signupUser(formData);
      if (result.message === "User created") {
        setMessage("✅ Account created. Now login.");
      } else {
        setMessage("❌ " + (result.message || "Error"));
      }
    } catch (err) {
      setMessage("❌ Network error");
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up 🚀</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Create Account
        </button>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
      <p className="text-center text-gray-600 mt-4">
        Already have an account? <Link to="/" className="text-blue-500 font-semibold">Login</Link>
      </p>
    </div>
  );
}

export default Signup;

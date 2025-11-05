// src/pages/Login.jsx
import { useState } from "react";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function Login() {   // ✅ yaha function ka naam hai Login
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const result = await loginUser(formData);
      console.log("Login result:", result); // ✅ Debug

      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userName", result.user?.name || "User");
        setMessage("✅ Login successful");
        navigate("/dashboard");
      } else {
        setMessage("❌ " + (result.message || "Login failed"));
      }
    } catch (err) {
      setMessage("❌ Network error");
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Login 🔐
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      {message && <p className="text-center mt-4">{message}</p>}

      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;   // ✅ Very Important!

// src/api/index.js

// 🔹 Signup API
export const signupUser = async (formData) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Signup error:", err);
    return { message: "Network error" };
  }
};

// 🔹 Login API
export const loginUser = async (formData) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data; // ✅ important
  } catch (err) {
    console.error("Login error:", err);
    return { message: "Network error" };
  }
};

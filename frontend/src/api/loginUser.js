
const BASE_URL = import.meta.env.VITE_API_URL;

import axios from "axios";
const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, userData);

export const loginUser = async (userData) => {
  try {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

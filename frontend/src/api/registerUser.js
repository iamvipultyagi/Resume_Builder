import axios from "axios";

const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, userData);
const BASE_URL = import.meta.env.VITE_API_URL;
export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    return data;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};

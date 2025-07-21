const BASE_URL = "http://localhost:5000/api";

export const saveResume = async (resumeData, token) => {
  try {
    const res = await fetch(`${BASE_URL}/resume`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // if JWT auth is used
      },
      body: JSON.stringify(resumeData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to save resume");
    return data;
  } catch (error) {
    console.error("Resume Save Error:", error.message);
    throw error;
  }
};

export const getResume = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/resume`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch resume");
    return data;
  } catch (error) {
    console.error("Resume Fetch Error:", error.message);
    throw error;
  }
};

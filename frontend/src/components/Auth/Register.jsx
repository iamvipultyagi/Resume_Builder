
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.fullName, form.email, form.password);
      alert("Registered successfully! Now login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-sm p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" value={form.fullName}
          onChange={e => setForm({ ...form, fullName: e.target.value })} className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 color-blue
         text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;

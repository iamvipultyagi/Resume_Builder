import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/resume-builder");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-sm p-6 rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-align-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;

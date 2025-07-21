import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ResumeBuilder from "../ResumeBuilder";
import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/resume-builder"
            element={
              <PrivateRoute>
                <ResumeBuilder />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = async () => {
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const user = await register(username, password);
      localStorage.setItem("role", user.role);
      navigate("/teacher/dashboard");
    } catch (err) {
      setErrors({ username: "Registration failed or email already exists" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="card w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-2">
          School Management
        </h1>
        <p className="text-slate-500 text-center mb-8">
          Register a new account
        </p>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Username (Email)</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button onClick={handleRegister} className="btn-primary w-full mb-4">
          Register
        </button>
        
        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

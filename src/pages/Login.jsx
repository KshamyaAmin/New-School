import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Role State
  const [role, setRole] = useState("teacher");

  // Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState({});

  // Login Function
  const handleLogin = async () => {

    let newErrors = {};

    // Username Validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await login(username, password);
      // Save Role (for UI purposes)
      localStorage.setItem("role", role);

      // Navigate Based On Role
      if (role === "admin") {
        navigate("/admin/dashboard");
      }
      else {
        navigate("/teacher/dashboard");
      }
    } catch (err) {
      setErrors({ username: "Invalid credentials" });
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-slate-100">

      <div className="card w-[400px]">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          School Management
        </h1>

        <p className="text-slate-500 text-center mb-8">
          Login to continue
        </p>

        {/* Role Switch */}
        <div className="flex bg-slate-100 rounded-xl p-1 mb-6">

          {/* Teacher */}
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all
              ${
                role === "teacher"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600"
              }
            `}
          >
            Teacher
          </button>

          {/* Admin */}
          <button
            onClick={() => setRole("admin")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all
              ${
                role === "admin"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600"
              }
            `}
          >
            Admin
          </button>

        </div>

        {/* Username */}
        <div className="mb-4">

          <label className="block mb-2 font-medium">
            Username
          </label>

          <input
            type="text"
            placeholder={`Enter ${role} username`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />

          {
            errors.username &&
            <p className="text-red-500 text-sm mt-1">
              {errors.username}
            </p>
          }

        </div>

        {/* Password */}
        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-slate-500"
            >
              {
                showPassword ? "🙈" : "👁"
              }
            </button>

          </div>

          {
            errors.password &&
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          }

        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="btn-primary w-full"
        >
          Login as {role}
        </button>

      </div>

    </div>
  );
}

export default Login;
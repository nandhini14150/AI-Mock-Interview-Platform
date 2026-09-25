import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://ai-mock-interview-platform-5-jycy.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setError(
          typeof data === "string"
            ? data
            : "Invalid email or password"
        );
        setLoading(false);
        return;
      }

      // Save logged-in user information
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);

      // Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the server. Make sure Spring Boot is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          AI<span>Interview</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your interview preparation
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Options */}
          <div className="form-options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot">
              Forgot password?
            </a>

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;
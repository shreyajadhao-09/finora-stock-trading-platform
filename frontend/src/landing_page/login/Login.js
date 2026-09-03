import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await api.post("/login", { email, password });
      const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;
      const user = encodeURIComponent(JSON.stringify(response.data.user));

      window.location.assign(
        `${dashboardUrl || "http://localhost:3001"}/#token=${encodeURIComponent(
          response.data.token
        )}&user=${user}`
      );
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="landing-auth-page">
      <section className="landing-auth-card">
        <p className="landing-auth-brand">FINORA</p>
        <h1>Welcome back</h1>
        <p className="landing-auth-subtitle">
          Sign in to open your investment dashboard.
        </p>

        <form className="landing-auth-form" onSubmit={handleSubmit}>
          <label htmlFor="landing-login-email">Email address</label>
          <input
            id="landing-login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="landing-login-password">Password</label>
          <input
            id="landing-login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit">Sign in</button>
        </form>

        {error && <p className="landing-auth-error">{error}</p>}

        <p className="landing-auth-footer">
          New to Finora? <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;

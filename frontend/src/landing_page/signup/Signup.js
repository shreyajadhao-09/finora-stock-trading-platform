import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await api.post("/signup", form);
      navigate("/login");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Could not create account");
    }
  };

  return (
    <main className="landing-auth-page">
      <section className="landing-auth-card">
        <p className="landing-auth-brand">FINORA</p>
        <h1>Create your account</h1>
        <p className="landing-auth-subtitle">
          Create an account, then sign in to open your dashboard.
        </p>

        <form className="landing-auth-form" onSubmit={handleSubmit}>
          <label htmlFor="landing-signup-name">Full name</label>
          <input
            id="landing-signup-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="landing-signup-email">Email address</label>
          <input
            id="landing-signup-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="landing-signup-password">Password</label>
          <input
            id="landing-signup-password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            minLength="8"
            required
          />

          <button type="submit">Create account</button>
        </form>

        {error && <p className="landing-auth-error">{error}</p>}

        <p className="landing-auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;

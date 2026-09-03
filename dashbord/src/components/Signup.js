import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
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
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand">FINORA</div>
        <h1>Create your account</h1>
        <p className="auth-subtitle">Start tracking your investments today.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="signup-name">Full name</label>
        <input
          id="signup-name"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="signup-email">Email address</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          name="password"
          type="password"
          placeholder="Password"
          minLength="8"
          required
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Create account</button>
      </form>

      {error && <p className="auth-error">{error}</p>}

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;

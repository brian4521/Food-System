import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    console.log(response.data);
    navigate("/");
  };

  return (
    <div className="app-shell">
      <main className="auth-card">
        <div className="auth-top">
          <p className="auth-label">FoodEase</p>
          <Link to="/food-partner/login" className="auth-switch">
            Sign in as partner
          </Link>
        </div>

        <div className="auth-header">
          <div>
            <h1>Welcome back, user</h1>
            <p className="auth-copy">
              Log in to continue ordering from your favorite restaurants.
            </p>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="form-group">
            <span>Email address</span>
            <input type="email" name="email" placeholder="your@email.com" />
          </label>
          <label className="form-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </label>

          <button type="submit" className="auth-action">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            New here? <Link to="/user/register">Create an account</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default UserLogin;

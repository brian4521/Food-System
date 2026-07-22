import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName,
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
          <Link to="/food-partner/register" className="auth-switch">
            Register as food partner
          </Link>
        </div>

        <div className="auth-header">
          <div>
            <h1>Create your user account</h1>
            <p className="auth-copy">
              Sign up to order fresh meals in minutes.
            </p>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-group">
              <span>First name</span>
              <input type="text" name="firstName" placeholder="First name" />
            </label>
            <label className="form-group">
              <span>Last name</span>
              <input type="text" name="lastName" placeholder="Last name" />
            </label>
          </div>
          <label className="form-group">
            <span>Email address</span>
            <input type="email" name="email" placeholder="your@email.com" />
          </label>
          <label className="form-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create password"
            />
          </label>

          <button type="submit" className="auth-action">
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/user/login">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default UserRegister;

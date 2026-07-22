import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    axios
      .post(
        "http://localhost:3000/api/auth/food-partner/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response.data);
        navigate("/create-food");
      })
      .catch((error) => {
        console.log("error while login", error);
      });
  };
  return (
    <div className="app-shell">
      <main className="auth-card">
        <div className="auth-top">
          <p className="auth-label">FoodEase</p>
          <Link to="/user/login" className="auth-switch">
            Sign in as user
          </Link>
        </div>

        <div className="auth-header">
          <div>
            <h1>Partner login</h1>
            <p className="auth-copy">
              Access your dashboard and manage incoming orders.
            </p>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="form-group">
            <span>Email address</span>
            <input type="email" name="email" placeholder="partner@email.com" />
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
            New here? <Link to="/food-partner/register">Create an account</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default FoodPartnerLogin;

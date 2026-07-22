import React from "react";
import { Link } from "react-router-dom";

const FoodPartnerLogin = () => {
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

        <form className="auth-form" noValidate>
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

          <button type="button" className="auth-action">
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

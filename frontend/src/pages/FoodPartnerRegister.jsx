import React from "react";
import { Link } from "react-router-dom";

const FoodPartnerRegister = () => {
  return (
    <div className="app-shell">
      <main className="auth-card">
        <div className="auth-top">
          <p className="auth-label">FoodEase</p>
          <Link to="/user/register" className="auth-switch">
            Register as user
          </Link>
        </div>

        <div className="auth-header">
          <div>
            <h1>Partner with FoodEase</h1>
            <p className="auth-copy">
              Register your kitchen and start accepting orders today.
            </p>
          </div>
        </div>

        <form className="auth-form" noValidate>
          <label className="form-group">
            <span>Business name</span>
            <input
              type="text"
              name="businessName"
              placeholder="Enter business name"
            />
          </label>
          <label className="form-group">
            <span>Contact name</span>
            <input
              type="text"
              name="contactName"
              placeholder="Enter contact name"
            />
          </label>
          <label className="form-group">
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="Enter phone number" />
          </label>
          <label className="form-group">
            <span>Email address</span>
            <input type="email" name="email" placeholder="partner@email.com" />
          </label>
          <label className="form-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create password"
            />
          </label>
          <label className="form-group">
            <span>Address</span>
            <input
              type="text"
              name="address"
              placeholder="Enter business address"
            />
          </label>

          <button type="button" className="auth-action">
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have a partner account?{" "}
            <Link to="/food-partner/login">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default FoodPartnerRegister;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bussinessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    axios
      .post(
        "http://localhost:3000/api/auth/food-partner/register",
        {
          name: bussinessName,
          contactName,
          phone,
          email,
          password,
          address,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response.data);
        navigate("/create-food");
      })
      .catch((error) => {
        console.log("error while registering", error);
      });
  };

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

        <form className="auth-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="auth-action">
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

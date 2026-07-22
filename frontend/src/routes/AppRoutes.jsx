import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from "../pages/UserRegister.jsx";
import UserLogin from "../pages/UserLogin.jsx";
import FoodPartnerRegister from "../pages/FoodPartnerRegister.jsx";
import FoodPartnerLogin from "../pages/FoodPartnerLogin.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

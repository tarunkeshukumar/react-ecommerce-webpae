import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>E-Commerce 🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;

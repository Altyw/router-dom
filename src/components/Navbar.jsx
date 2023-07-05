import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ color }) => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/about") {
    return <h1>qwerty</h1>;
  }
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#aaa234",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      Navbar
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      {/* <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About Us</button> */}
    </div>
  );
};

export default Navbar;

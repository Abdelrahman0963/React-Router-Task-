import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineSun } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { ThemeContext } from "../../Hooks/ThemeContext/ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="logo theme">
        <h1>Logo</h1>
        <div className="themeBtn">
          {theme === "light" ? (
            <GiMoon onClick={() => setTheme("dark")} />
          ) : (
            <AiOutlineSun onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
      <div className={`navbar-link ${theme === "light" ? "light" : "dark"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div
        className={`btn-login ${theme === "light" ? "light" : "dark"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span>Login</span>
      </div>
    </div>
  );
}

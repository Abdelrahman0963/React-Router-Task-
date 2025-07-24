import React, { useContext } from "react";
import "./Navcard.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Hooks/ThemeContext/ThemeProvider";
export default function Navcard() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`navcard ${theme === "light" ? "light" : "dark"}`}>
        <NavLink to="/ContactForm">Contact Us Form</NavLink>
        <NavLink to="/ContactEmail">Email</NavLink>
        <NavLink to="/ContactLocation">Location</NavLink>
        <NavLink to="/ContactPhoneNum">Phone Number</NavLink>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import "./Navcard.css";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../Hooks/ThemeContext/ThemeProvider";
import ContactForm from "../../pages/ContactUs/ContactForm";
import ContactEmail from "../../pages/ContactUs/ContactEmail";
export default function Navcard() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`navcard ${theme === "light" ? "light" : "dark"}`}>
        <NavLink to="ContactForm">Contact Us Form</NavLink>
        <NavLink to="ContactEmail">Email</NavLink>
        <NavLink to="ContactLocation">Location</NavLink>
        <NavLink to="ContactPhoneNum">Phone Number</NavLink>
      </div>
    </div>
  );
}

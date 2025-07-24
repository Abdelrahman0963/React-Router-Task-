import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Hooks/ThemeContext/ThemeProvider";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`hero ${theme === "light" ? "light" : "dark"}`}>
      <Navbar theme={theme} />
      <Outlet />
    </div>
  );
}

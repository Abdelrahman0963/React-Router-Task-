import React from "react";
import "./ContactUs.css";
import Navcard from "../../components/NavCard/Navcard";
import { Outlet } from "react-router-dom";
export default function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="ContactUs-Content">
        <Navcard />
      </div>
      <Outlet />
    </div>
  );
}

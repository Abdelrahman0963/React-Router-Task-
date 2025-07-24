import React from "react";
import { Outlet } from "react-router-dom";

export default function ContactLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

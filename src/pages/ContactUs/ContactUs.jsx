import React from "react";
import "./ContactUs.css";
import { createBrowserRouter } from "react-router-dom";
import Navcard from "../../components/NavCard/Navcard";
import ContactLayout from "./ContactLayout";
import ContactForm from "./ContactForm";
import ContactEmail from "./ContactEmail";
import ContactLocation from "./ContactLocation";
import ContactPhoneNum from "./ContactPhoneNum";
export default function ContactUs() {
  const ContactRouting = createBrowserRouter([
    {
      path: "/",
      element: <ContactLayout />,
      children: [
        { index: true, element: <ContactForm /> },
        { path: "Email", element: <ContactEmail /> },
        { path: "Location", element: <ContactLocation /> },
        { path: "PhoneNum", element: <ContactPhoneNum /> },
      ],
    },
  ]);
  return (
    <div className="ContactUs">
      <div className="ContactUs-Content">
        <Navcard />
      </div>
      <h1>Welcome to Contact Us Page</h1>
    </div>
  );
}

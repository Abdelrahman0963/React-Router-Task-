import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Service from "./pages/ServicePage/Service";
import ContactForm from "./pages/ContactUs/ContactForm";
import ContactEmail from "./pages/ContactUs/ContactEmail";
import ContactLocation from "./pages/ContactUs/ContactLocation";
import ContactPhoneNum from "./pages/ContactUs/ContactPhoneNum";
import { ThemeProvider } from "./Hooks/ThemeContext/ThemeProvider";

export default function App() {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "Service", element: <Service /> },
        {
          path: "/contact",
          element: <ContactUs />,
          children: [
            { path: "ContactForm", element: <ContactForm /> },
            { path: "ContactEmail", element: <ContactEmail /> },
            { path: "ContactLocation", element: <ContactLocation /> },
            { path: "ContactPhoneNum", element: <ContactPhoneNum /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={Routing} />
    </ThemeProvider>
  );
}

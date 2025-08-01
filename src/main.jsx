import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContext } from "./Hooks/ThemeContext/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <App />
  </ThemeContext>
);

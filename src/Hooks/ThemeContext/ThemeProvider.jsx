import React, { createContext, useState } from "react";
import UseLocalStorage from "../../Hooks/useLocalStorage/UseLocalStorage";
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = UseLocalStorage("theme", "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

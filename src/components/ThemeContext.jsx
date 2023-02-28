import { createContext, useContext, useState } from "react";

// Custom Hooks
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// Creates a value with useState to be globally used
export function ThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(true);

  // Toggle button
  function toggleTheme() {
    setColorTheme((prevColorTheme) => !prevColorTheme);
  }
  return (
    // Provider gives a global state where value is available to all of its children
    <ThemeContext.Provider value={colorTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function Navbar() {
  const toggleTheme = useThemeUpdate();
  const colorTheme = useTheme();

  return (
    <div
      className="w-full border-b-2 flex justify-between"
      style={{
        background: colorTheme ? "white" : "#2b3945",
        borderColor: colorTheme ? "#888888" : "#202c37",
      }}
    >
      <h1 className="flex ml-20 text-3xl my-6">Where in the world?</h1>
      <button onClick={toggleTheme} className="mr-12 text-3xl">
        Dark Mode
      </button>
    </div>
  );
}

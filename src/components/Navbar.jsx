import React from "react";
import { useThemeUpdate } from "./ThemeContext";

export default function Navbar() {
  const toggleTheme = useThemeUpdate();

  return (
    <div className="w-full border-b-2 flex justify-between">
      <h1 className="flex ml-20 text-2xl my-6">Where in the world?</h1>
      <button onClick={toggleTheme} className="mr-12">
        Dark Mode
      </button>
    </div>
  );
}

import React from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";
// Icons
import dMode from "../../icons/moon.png";
import lMode from "../../icons/moondark.png";

export default function Navbar() {
  const toggleTheme = useThemeUpdate();
  const colorTheme = useTheme();
  const darkMode = colorTheme ? dMode : lMode;

  return (
    <div
      className="w-full border-b-2 flex justify-between"
      style={{
        background: colorTheme ? "white" : "#2b3945",
        borderColor: colorTheme ? "#888888" : "#202c37",
      }}
    >
      <h1 className="flex ml-6 md:ml-20 md:text-3xl my-6 font-Nunito">
        Where in the world?
      </h1>
      <button
        onClick={toggleTheme}
        className="mr-6 md:mr-12 md:text-xl font-Nunito-m"
      >
        <img
          src={darkMode}
          className="h-6 absolute right-28 md:right-40 top-6 md:top-[29px]"
        />
        Dark Mode
      </button>
    </div>
  );
}

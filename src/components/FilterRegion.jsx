import React from "react";
import { useTheme } from "./ThemeContext";
function FilterRegion({ onRegionChange }) {
  const colorTheme = useTheme();

  function handleRegionClick(region) {
    onRegionChange(region);
  }

  return (
    <div className="mt-12 md:mr-20 ml-4 md:ml-0">
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn m-1"
          style={{
            background: colorTheme ? "white" : "#2b3945",
            borderColor: colorTheme ? "gray" : "#2b3945",
          }}
        >
          Filter by Region
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 "
          style={{ background: colorTheme ? "white" : "#2b3945" }}
        >
          <li>
            <a onClick={() => handleRegionClick("Africa")}>Africa</a>
          </li>
          <li>
            <a onClick={() => handleRegionClick("Americas")}>America</a>
          </li>
          <li>
            <a onClick={() => handleRegionClick("Asia")}>Asia</a>
          </li>
          <li>
            <a onClick={() => handleRegionClick("Europe")}>Europe</a>
          </li>
          <li>
            <a onClick={() => handleRegionClick("Oceania")}>Oceania</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterRegion;

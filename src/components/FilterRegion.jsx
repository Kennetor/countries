import React from "react";
// import { useTheme } from "./ThemeContext";
function FilterRegion({ onRegionChange }) {
  //   const colorTheme = useTheme();

  function handleRegionClick(region) {
    onRegionChange(region);
  }

  return (
    <div className="mt-12 mr-32">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Filter by Region
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-black"
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

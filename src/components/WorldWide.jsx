import { useState } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
// Components
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import FilterRegion from "./FilterRegion";

export default function WorldWide() {
  const colorTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const colors = {
    backgroundColor: colorTheme ? "white" : "black",
    color: colorTheme ? "black" : "white",
  };

  return (
    <>
      <div style={colors}>
        <div className="w-full border-b-2 flex justify-between">
          <h1 className="flex ml-20 text-2xl my-6">Where in the world?</h1>
          <button
            onClick={toggleTheme}
            className="mr-12"
            style={{
              color: colorTheme ? "black" : "white",
            }}
          >
            Dark Mode
          </button>
        </div>
        {selectedCountry ? (
          <CountryDetails
            country={selectedCountry}
            onBackClick={() => setSelectedCountry(null)}
          />
        ) : (
          <>
            <div className="flex justify-between flex-wrap">
              <input
                type="text"
                placeholder="Search for a country..."
                className="px-4 py-2 rounded-lg shadow-md mr-4 border-2 flex mt-12 ml-28 w-96"
                style={{ backgroundColor: colorTheme ? "white" : "black" }}
              />
              <FilterRegion onRegionChange={handleRegionChange} />
            </div>
            <Country
              region={selectedRegion}
              onCountryClick={handleCountryClick}
            />
          </>
        )}
      </div>
    </>
  );
}

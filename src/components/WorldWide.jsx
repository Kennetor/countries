import { useState } from "react";
import { useTheme } from "./ThemeContext";
// Components
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import FilterRegion from "./FilterRegion";
import Navbar from "./Navbar";
import SearchCountry from "./SearchCountry";

export default function WorldWide() {
  const colorTheme = useTheme();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  //   function handleSearchInput(e) {
  //     setSearchInput(e.target.value);
  //   }

  const colors = {
    backgroundColor: colorTheme ? "white" : "black",
    color: colorTheme ? "black" : "white",
  };
  return (
    <>
      <div style={colors}>
        <Navbar />
        {selectedCountry ? (
          <CountryDetails
            country={selectedCountry}
            onBackClick={() => setSelectedCountry(null)}
          />
        ) : (
          <>
            <div className="flex justify-between flex-wrap">
              <SearchCountry />
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

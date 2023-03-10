import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
// Components
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import FilterRegion from "./FilterRegion";
import Navbar from "./Navbar";
import SearchCountry from "./SearchCountry";

export default function WorldWide() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const colorTheme = useTheme();

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  const colors = {
    backgroundColor: colorTheme ? "white" : "#202c37",
    color: colorTheme ? "#202c37" : "white",
  };

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllCountries(data));
  }, []);

  return (
    <>
      <div style={colors}>
        <Navbar />
        {selectedCountry ? (
          <CountryDetails
            country={selectedCountry}
            returnBtn={() => setSelectedCountry(null)}
            allCountries={allCountries}
            setSelectedCountry={setSelectedCountry}
          />
        ) : (
          <>
            <div className="flex justify-between flex-wrap">
              <SearchCountry onChange={handleSearchInput} />
              <FilterRegion onRegionChange={handleRegionChange} />
            </div>
            <Country
              region={selectedRegion}
              searchInput={searchInput}
              onCountryClick={handleCountryClick}
              allCountries={allCountries}
            />
          </>
        )}
      </div>
    </>
  );
}

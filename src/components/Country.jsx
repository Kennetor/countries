import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

function Country({ region, onCountryClick, searchInput }) {
  const [countries, setCountries] = useState([]);
  const colorTheme = useTheme();
  useEffect(() => {
    let url = "https://restcountries.com/v3.1/all";
    if (region) {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }
    if (searchInput) {
      url = `https://restcountries.com/v3.1/name/${searchInput}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region, searchInput]);

  if (!Array.isArray(countries)) {
    return (
      <div className="mt-10 text-center text-gray-500 min-h-screen">
        No countries found
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-around mt-10 min-h-screen">
        <div className="grid md:grid-cols-4 gap-20 ">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="border-2 w-60 rounded-lg h-72 shadow-md"
              style={{
                borderColor: colorTheme ? "" : "#2b3945",
                background: colorTheme ? "white" : "#2b3945",
              }}
              onClick={() => onCountryClick(country)}
            >
              <img
                src={country.flags.svg}
                className="w-full h-32 object-cover shadow-sm"
                style={{ borderColor: colorTheme ? "#708090" : "#2b3945" }}
              />
              <div className="text-justify ml-4">
                <h1 className="mt-2 leading-10 font-bold">
                  {country.name.common}
                </h1>
                <p>
                  <span className="font-medium">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-medium">Capital: </span>
                  {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Country;

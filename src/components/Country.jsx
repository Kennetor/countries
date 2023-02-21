import React, { useState, useEffect } from "react";

function Country({ region, onCountryClick }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let url = "https://restcountries.com/v3.1/all";
    if (region) {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region]);

  return (
    <div>
      <div className="flex justify-around mt-10">
        <div className="grid md:grid-cols-4 gap-20 ">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="border-2 w-60 rounded-lg h-72"
              onClick={() => onCountryClick(country)}
            >
              <img
                src={country.flags.svg}
                className="w-full h-32 object-cover border-b-2"
              />
              <div className="text-justify ml-6">
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

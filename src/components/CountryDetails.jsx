import { useTheme } from "./ThemeContext";

function CountryDetails({ country, onBackClick, allCountries }) {
  const colorTheme = useTheme();
  // Check if country has array with borders, then show first 3
  const borderCountries =
    country.borders && Array.isArray(country.borders)
      ? country.borders.slice(0, 3).map((borderCountryCode) => {
          const borderCountry =
            allCountries &&
            allCountries.find((c) => c.cca3 === borderCountryCode);
          return borderCountry ? borderCountry.name.common : borderCountryCode;
        })
      : [];
  console.log(country);
  return (
    <>
      <div
        className="bg-blue-200 h-screen"
        style={{
          color: colorTheme ? "#2b3945" : "white",
          background: colorTheme ? "white" : "#202c37",
        }}
      >
        <button
          onClick={onBackClick}
          className="btn flex absolute top-28 md:top-32 left-6 w-32"
          style={{ background: colorTheme ? "white" : "#2b3945" }}
        >
          back
        </button>
        <div className="md:block flex justify-center">
          <img
            src={country.flags.svg}
            className="w-[20em] md:w-[30em] object-contain border-2 md:ml-6 absolute top-48 md:top-60"
            style={{ borderColor: colorTheme ? "white" : "#2b3945" }}
          />
        </div>
        <div className="md:absolute mt-32 ml-10 md:ml-0 md:mt-20 text-left top-36 left-60 md:translate-y-0 translate-y-72">
          <p className="mt-6 md:translate-x-80 ">
            <div className="text-5xl">{country.name.common}</div>
          </p>
          <div className="md:grid grid-flow-row grid-cols-2 gap-4 md:translate-x-80 md:w-[40em] ml-2 md:ml-0">
            <p className="mt-12">
              <span className="font-bold">Native Name: </span>
              {country.altSpellings[1]}
            </p>
            <p className="md:mt-12">
              <span className="font-bold">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region: </span> {country.region}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="font-bold">Capital: </span> {country.capital}
            </p>
            {/* fix desktop/mobile css */}
            <div className="mt-10 md:mt-0">
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.tld.join(" ")}
              </p>
              <p>
                <span className="font-bold">Currencies: </span>
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span className="font-bold">Languages: </span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-6 md:translate-x-80">
            {borderCountries.length > 0 ? (
              <div className="inline md:w-full md:flex">
                <div className="font-medium mt-10 md:mt-4 ml-2 md:ml-0">
                  Border Countries:
                </div>
                {borderCountries.map((borderCountry, index) => {
                  const borderCountryCode =
                    country.borders && Array.isArray(country.borders)
                      ? country.borders[index]
                      : null;
                  const borderCountryURL = `https://restcountries.com/v3.1/alpha/${borderCountryCode}`;
                  return (
                    <button
                      key={index}
                      href={borderCountryURL}
                      className="border-slate-400 border-2 rounded mt-4 w-20 md:w-24 ml-2 md:ml-8 mb-20"
                      // onClick={() =>
                      //   handleBorderCountryClick(borderCountryCode)
                      // }
                    >
                      {borderCountry}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;

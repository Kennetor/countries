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
        className="bg-blue-200 overflow-y-hidden h-screen"
        style={{
          color: colorTheme ? "#2b3945" : "white",
          background: colorTheme ? "white" : "#202c37",
        }}
      >
        <button
          onClick={onBackClick}
          className="btn flex absolute top-32 left-10 w-32"
          style={{ background: colorTheme ? "white" : "#2b3945" }}
        >
          back
        </button>
        <img
          src={country.flags.svg}
          className="w-[50em] object-contain border-2 translate-y-40 ml-10"
          style={{ borderColor: colorTheme ? "white" : "#2b3945" }}
        />
        <div className="absolute mt-20">
          <div className=" relative text-left md:-top-80 translate-x-[45em] text-xl ">
            <p className="mt-6">
              <div className="text-5xl">{country.name.common}</div>
            </p>
            <div className="grid grid-flow-row grid-cols-2 gap-x-20 gap-4">
              <p className="mt-12">
                <span className="font-bold">Native Name: </span>
                {country.altSpellings[1]}
              </p>
              <p className="mt-12">
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
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.tld.join(" ")}
              </p>
              <p>
                {" "}
                <span className="font-bold">Currencies: </span>
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>{" "}
              <p>
                <span className="font-bold">Languages: </span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>

            <div className="flex mt-16 justify-">
              {borderCountries.length > 0 ? (
                <div className="inline w-full md:flex">
                  <div className="font-medium mt-10 md:mt-4 ml-10 md:ml-0">
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
                        className="border-slate-400 border-2 rounded mt-4 w-20 md:w-24 ml-8 mb-20"
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
      </div>
    </>
  );
}

export default CountryDetails;

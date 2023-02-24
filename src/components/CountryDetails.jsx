import { useTheme } from "./ThemeContext";

function CountryDetails({ country, onBackClick }) {
  const colorTheme = useTheme();
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
        <div className="grid grid-cols-3">
          <img
            src={country.flags.svg}
            className="w-[35em] h-96 object-cover border-2 translate-y-40 ml-10"
            style={{ borderColor: colorTheme ? "white" : "#2b3945" }}
          />
          <div className="absolute right-0 ml-60 text-left">
            <p className="mt-20">
              <div className="text-5xl">{country.name.common}</div>
            </p>
            <div className="grid grid-flow-row grid-cols-2 gap-2">
              <p className="mt-2">
                <span className="font-bold">Native Name: </span>
                {country.altSpellings[1]}
              </p>
              <p>
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
            </div>
            <p>
              <span className="font-bold">Languages: </span>
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;

import { useTheme } from "./ThemeContext";

function CountryDetails({ country, onBackClick }) {
  const colorTheme = useTheme();
  return (
    <div
      className="bg-blue-200 overflow-y-hidden h-screen"
      style={{
        color: colorTheme ? "#2b3945" : "white",
        background: colorTheme ? "white" : "#2b3945",
      }}
    >
      <button
        onClick={onBackClick}
        className="btn flex absolute top-32 left-10"
      >
        back
      </button>
      <img
        src={country.flags.svg}
        className="w-96 object-cover border-2 translate-y-40 ml-10"
      />
      <p className="-mt-20 leading-loose">
        <span className="font-medium">Native Name: </span>
        {country.altSpellings[1]}
      </p>
      <p>
        <span className="font-bold">Region: </span> {country.region}
      </p>
      <p>
        <span className="font-bold">Population: </span>
        {country.population.toLocaleString()}
      </p>
      <p>
        <span className="font-bold">Sub Region: </span> {country.subregion}
      </p>
      <p>
        <span className="font-bold">Capital: </span> {country.capital}
      </p>
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
  );
}

export default CountryDetails;

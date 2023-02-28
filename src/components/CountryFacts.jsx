import { useTheme } from "./ThemeContext";

export const CountryFacts = ({ country }) => {
  const colorTheme = useTheme();
  return (
    <>
      <div className="md:block flex justify-center">
        <img
          src={country.flags.svg}
          className="w-[20em] md:w-[30em] border-2 -left-4 md:-left-48 absolute -top-40 md:top-0"
          style={{ borderColor: colorTheme ? "black" : "#2b3945" }}
        />
      </div>
      <div className="md:mt-0 mt-24 md:translate-x-60 md:ml-20 font-Nunito">
        <p className="text-5xl">{country.name.common}</p>
      </div>
      <div className="md:grid grid-flow-row grid-cols-2 md:mt-6 md:translate-x-60 md:w-[40em] md:ml-20">
        <div className="col-span-2 md:col-span-3 grid gap-2 mt-6">
          <p>
            <span className="font-Nunito">Native Name: </span>
            {country.altSpellings[1]}
          </p>
          <p>
            <span className="font-Nunito">Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-Nunito">Region: </span> {country.region}
          </p>
          <p>
            <span className="font-Nunito text-lg">Sub Region: </span>
            {country.subregion}
          </p>
          <p>
            <span className="font-Nunito">Capital: </span> {country.capital}
          </p>
        </div>
        <div className="md:col-start-4 md:col-end-5 md:mt-6">
          <div className="mt-10 md:mt-0 grid gap-2">
            <p>
              <span className="font-Nunito">Top Level Domain: </span>
              {country.tld.join(" ")}
            </p>
            <p>
              <span className="font-Nunito">Currencies: </span>
              {Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
            <p>
              <span className="font-Nunito">Languages: </span>
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

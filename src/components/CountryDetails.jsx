import { useTheme } from "./ThemeContext";
// Components
import { BackButton } from "./BackButton";
import { CountryFacts } from "./CountryFacts";

function CountryDetails({
  country,
  returnBtn,
  allCountries,
  setSelectedCountry,
}) {
  const colorTheme = useTheme();

  function handleBorderCountryClick(borderCountryCode) {
    const borderCountry = allCountries.find(
      (c) => c.cca3 === borderCountryCode
    );
    if (borderCountry) {
      setSelectedCountry(borderCountry);
    }
  }

  const borderCountries =
    country.borders && Array.isArray(country.borders)
      ? country.borders.slice(0, 3).map((borderCountryCode) => {
          const borderCountry =
            allCountries &&
            allCountries.find((c) => c.cca3 === borderCountryCode);
          return borderCountry ? borderCountry.name.common : borderCountryCode;
        })
      : [];

  return (
    <>
      <div
        style={{
          color: colorTheme ? "#2b3945" : "white",
          background: colorTheme ? "white" : "#202c37",
          height: "1100px",
        }}
      >
        <BackButton returnBtn={returnBtn} />
        <div className="md:absolute ml-10 md:ml-0 md:mt-60 text-left top-3 left-60 md:translate-y-0 translate-y-72">
          <CountryFacts country={country} />

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
                      key={borderCountry}
                      href={borderCountryURL}
                      className="border-slate-400 border-2 rounded mt-4 w-24 ml-2 md:ml-8 mb-20"
                      onClick={() =>
                        handleBorderCountryClick(borderCountryCode)
                      }
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

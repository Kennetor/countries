import { useTheme } from "./ThemeContext";
// Icons
import magGlassD from "../../icons/searchblack.png";
import magGlassL from "../../icons/searchwhite.png";

export default function SearchCountry({ onChange }) {
  const colorTheme = useTheme();
  const magGlass = colorTheme ? magGlassD : magGlassL;

  return (
    <div className="flex justify-center flex-wrap mx-auto md:mx-0">
      <input
        type="text"
        style={{
          background: colorTheme ? "white" : "#2b3945",
          borderColor: colorTheme ? "white" : "#2b3945",
        }}
        placeholder="Search for a country..."
        className="px-6 py-4 rounded-lg shadow-md mr-4 border-2 flex mt-8 md:mt-12 md:ml-28 mx-auto w-[20em] md:w-96 text-center font-Nunito-m"
        onChange={onChange}
      />
      <img
        src={magGlass}
        className="h-6 md:h-8 left-10 md:left-32 top-[7.7rem] md:top-[9.2em] absolute"
      />
    </div>
  );
}

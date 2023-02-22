import { useTheme } from "./ThemeContext";

export default function SearchCountry() {
  const colorTheme = useTheme();
  return (
    <div className="flex justify-between flex-wrap">
      <input
        type="text"
        style={{ background: colorTheme ? "white" : "black" }}
        placeholder="Search for a country..."
        className="px-4 py-2 rounded-lg shadow-md mr-4 border-2 flex mt-12 ml-28 w-96"
      />
    </div>
  );
}

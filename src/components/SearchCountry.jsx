import { useTheme } from "./ThemeContext";

export default function SearchCountry({ onChange }) {
  const colorTheme = useTheme();

  return (
    <div className="flex justify-between flex-wrap">
      <input
        type="text"
        style={{
          background: colorTheme ? "white" : "#2b3945",
          borderColor: colorTheme ? "white" : "#2b3945",
        }}
        placeholder="Search for a country..."
        className="px-4 py-2 rounded-lg shadow-md mr-4 border-2 flex mt-12 md:ml-20 md:w-96"
        onChange={onChange}
      />
    </div>
  );
}

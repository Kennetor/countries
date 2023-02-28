import { useTheme } from "./ThemeContext";

export const BackButton = ({ returnBtn }) => {
  const colorTheme = useTheme();

  return (
    <button
      onClick={returnBtn}
      className="btn flex absolute top-24 md:top-32 left-6 md:left-12 w-32"
      style={{
        background: colorTheme ? "white" : "#2b3945",
        color: colorTheme ? "black" : "white",
      }}
    >
      <span className="text-xl mb-2 mx-2 -translate-x-2">←</span>back
    </button>
  );
};

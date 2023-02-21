import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import WorldWide from "./components/WorldWide";

function App() {
  return (
    <ThemeProvider>
      <WorldWide />
    </ThemeProvider>
  );
}

export default App;

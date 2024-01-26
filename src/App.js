import "./App.css";
import Home from "./Page/Home";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#2d3748" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Home />
    </div>
  );
}

export default App;

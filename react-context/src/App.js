import { useContext, useState } from "react";
import { Level1 } from "./components/Level1";
import { THEME, ThemeModeContext } from "./context/theme_mode_context";

function App() {
  //reading the data of a context
  const initalThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initalThemeMode);
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        style={{
          color: THEME[themeMode].color,
          backgroundColor: THEME[themeMode].backgroundColor,
          height: "100VH",
        }}
      >
        <Level1 />
      </div>
    </ThemeModeContext.Provider>
  );
}

export default App;

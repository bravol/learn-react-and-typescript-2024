import { useContext } from "react";
import { ThemeModeContext } from "../context/theme_mode_context";

export function Level5(props) {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  function toggleThemeMode() {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }
  return (
    <>
      <div>I am level 5</div>
      <button onClick={toggleThemeMode}>Toggle Theme Mode</button>
    </>
  );
}

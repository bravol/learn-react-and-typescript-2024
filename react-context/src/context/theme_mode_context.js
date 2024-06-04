import { createContext } from "react";

export const ThemeModeContext = createContext("light");

export const THEME = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
  },
  dark: {
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(255,255,255,0.1)",
  },
};

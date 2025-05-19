import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}

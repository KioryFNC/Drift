import { ThemeProvider } from "./contexts/ThemeProvider";
import GlobalStyle from "./styles/global";

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

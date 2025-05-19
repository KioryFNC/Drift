import { ThemeProvider } from "./contexts/ThemeProvider";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

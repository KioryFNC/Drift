import * as Element from "./styles";
import Navbar from "../../components/Navbar";
import { HeroSection } from "../../components/HeroSection";

export function Home() {
  return (
    <Element.Root>
      <Navbar />;
      <HeroSection />
    </Element.Root>
  );
}

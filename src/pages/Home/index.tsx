import * as Element from "./styles";
import Navbar from "../../components/Navbar";
import { HeroSection } from "../../components/HeroSection";
import { Carousel } from "../../components/Carousel";
import { VideoSection } from "../../components/VideoSection";

export function Home() {
  return (
    <Element.Root>
      <Navbar />;
      <HeroSection />
      <Carousel />
      <VideoSection />
    </Element.Root>
  );
}

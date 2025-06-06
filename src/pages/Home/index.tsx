import * as Element from "./styles";
import Navbar from "../../components/Navbar";
import { HeroSection } from "../../components/HeroSection";
import { Carousel } from "../../components/Carousel";
import { VideoSection } from "../../components/VideoSection";
import { ServicesSection } from "../../components/ServicesSection";
import { GallerySection } from "../../components/GallerySection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Element.Root>
      <Navbar />;
      <HeroSection />
      <Carousel />
      <VideoSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </Element.Root>
  );
}

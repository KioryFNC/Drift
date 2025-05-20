import { useRef, useState } from "react";
import * as Element from "./styles";
import NOS from "../../assets/nos.png";
import drfitConcept from "../../assets/drfitConcept.png";
import acura from "../../assets/acura.png";
import maxSpeed from "../../assets/maxSpeed.png";
import bbs from "../../assets/bbs.png";

interface SponsorType {
  name: string;
  logo: string;
}

export function Carousel() {
  const [sponsors] = useState<SponsorType[]>([
    { name: "NOS Energy", logo: NOS },
    { name: "DriftConcept", logo: drfitConcept },
    { name: "Acura", logo: acura },
    { name: "MaxSpeed", logo: maxSpeed },
    { name: "BBS", logo: bbs },
  ]);

  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const allSponsors = [...sponsors, ...sponsors];

  return (
    <Element.Container>
      <Element.Title>Nossos Patrocinadores</Element.Title>

      <Element.Carousel>
        <Element.TrackWrapper
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Element.LogoList
            ref={trackRef}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {allSponsors.map((sponsor, index) => (
              <Element.LogoContainer key={`${sponsor.name}-${index}`}>
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name}`}
                  loading={index < 8 ? "eager" : "lazy"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement?.classList.add("fallback");
                    if (target.parentElement) {
                      const text = document.createElement("span");
                      text.textContent = sponsor.name;
                      target.parentElement.appendChild(text);
                    }
                  }}
                />
              </Element.LogoContainer>
            ))}
          </Element.LogoList>
        </Element.TrackWrapper>
      </Element.Carousel>
    </Element.Container>
  );
}

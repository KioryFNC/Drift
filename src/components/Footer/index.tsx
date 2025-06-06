import { Facebook, Instagram, Twitter } from "lucide-react";
import * as Element from "./styles";

export function Footer() {
  return (
    <Element.Footer>
      <Element.Container>
        <Element.CompanyName>Takumi Drift</Element.CompanyName>
        <Element.SocialLinks>
          <Element.SocialLink href="#" aria-label="Facebook">
            <Facebook size={24} />
          </Element.SocialLink>
          <Element.SocialLink href="#" aria-label="Instagram">
            <Instagram size={24} />
          </Element.SocialLink>
          <Element.SocialLink href="#" aria-label="Twitter">
            <Twitter size={24} />
          </Element.SocialLink>
        </Element.SocialLinks>
      </Element.Container>

      <Element.Copyright>
        &copy; {new Date().getFullYear()} Takumi Drift. Todos os direitos
        reservados
      </Element.Copyright>
    </Element.Footer>
  );
}

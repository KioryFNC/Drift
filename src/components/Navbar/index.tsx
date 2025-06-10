import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import * as Element from "./styles";
import { useTheme } from "../../contexts/useTheme";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Início", href: "#home" },
  { title: "Patrocinadores", href: "#sponsors" },
  { title: "Serviços", href: "#services" },
  { title: "Galeria", href: "#gallery" },
  { title: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Element.NavbarContainer $isScrolled={isScrolled}>
      <Element.Container>
        <Element.LogoLink href="#home">
          <Element.LogoText>BrandName</Element.LogoText>
        </Element.LogoLink>

        <Element.DesktopNav>
          {navItems.map((item) => (
            <Element.NavLink key={item.href} href={item.href}>
              {item.title}
            </Element.NavLink>
          ))}

          <Element.ThemeToggle
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Element.ThemeToggle>
        </Element.DesktopNav>

        <Element.MobileNav>
          <Element.ThemeToggle
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Element.ThemeToggle>

          <Element.MobileMenuButton
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </Element.MobileMenuButton>
        </Element.MobileNav>
      </Element.Container>

      <Element.MobileMenu $isOpen={mobileNavOpen}>
        <Element.MobileMenuContainer>
          {navItems.map((item) => (
            <Element.MobileNavLink
              key={item.href}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
            >
              {item.title}
            </Element.MobileNavLink>
          ))}
        </Element.MobileMenuContainer>
      </Element.MobileMenu>
    </Element.NavbarContainer>
  );
};

export default Navbar;

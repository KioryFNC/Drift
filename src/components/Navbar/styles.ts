import styled from "styled-components";

export const NavbarContainer = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.$isScrolled ? "var(--background-90)" : "transparent"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(8px)" : "none")};
  box-shadow: ${(props) =>
    props.$isScrolled
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "none"};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ThemeToggle = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.scrollbarTrack};
  }
`;

export const MobileNav = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  padding: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.scrollbarTrack};
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.scrollbarTrack};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-5px)"};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const MobileNavLink = styled.a`
  padding: 0.75rem 0;
  font-size: 1.125rem;
  border-bottom: 1px solid ${({ theme }) => theme.scrollbarTrack};
`;

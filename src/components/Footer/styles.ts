import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.scrollbarTrack};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialLink = styled.a`
  padding: 0.5rem;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.backgroundButton};
    transition: translateY(-3px);
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
`;

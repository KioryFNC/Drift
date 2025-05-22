import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  max-width: 36rem;
  margin: 0 auto 3rem;
`;

export const Subtitle = styled.h3`
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.scrollbarTrack};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background};

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-0.25rem);
    background-image: linear-gradient(
      to bottom right,
      rgba(34, 197, 94, 0.05),
      rgba(107, 114, 128, 0.05)
    );
  }
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.scrollbarThumb};
  border: 9999px;

  & > svg {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ServiceContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ServiceImage = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  order: 1;

  @media (min-width: 1024px) {
    width: 50%;
    height: 40rem;
    order: 2;
  }

  &:nth-of-type(even) {
    @media (min-width: 1024px) {
      order: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const ContentDescription = styled.p`
  color: ;
`;

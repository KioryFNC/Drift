import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-top: 0;
  margin-top: -1.5rem;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.8),
    ${({ theme }) => theme.background}
  );
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.2;
  z-index: 0;
`;

export const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle 700px at 70% 20%,
    ${({ theme }) => theme.gradientStart},
    transparent
  );
`;

export const BottomGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle 700px at 30% 80%,
    ${({ theme }) => theme.gradientEnd},
    transparent
  );
`;
export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 12rem;
  padding-bottom: 8rem;

  @media (min-width: 1024px) {
    max-width: 168rem;
    flex-direction: row;
    padding: 8rem;
  }
`;

export const ContentBox = styled.div`
  max-width: 40rem;
  text-align: center;
  padding: 3rem;
  border-radius: 0.5rem;
  background: radial-gradient(
    circle at center,
    rgba(34, 197, 94, 0.1) 0%,
    rgba(34, 197, 94, 0) 70%
  );
  position: relative;
  order: 2;

  @media (min-width: 1024px) {
    text-align: left;
    order: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.secundaryShadowColor} 0%,
      ${({ theme }) => theme.secundaryShadowColor} 70%
    );
    filter: blur(24px);
    border-radius: 50%;
    transform: scale(1.25);
    z-index: -10;
  }

  p {
    max-width: 40rem;
    margin: 0 auto 2.5rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
      margin: 0 0 3rem;
    }
  }

  .gradient-name {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3.5rem;
    font-weight: 700;
    position: relative;

    @media (min-width: 768px) {
      font-size: 4.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 5rem;
    }
  }
`;
export const HeroImage = styled.div`
  width: 100%;
  max-width: 55rem;
  height: 45rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(20, 255, 106, 0.25);
  order: 1;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    order: 2;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  animation: fade-in 0.8s ease-out;
  text-align: center;
  font-size: 3.5rem;
  line-height: 1.2;

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 4rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const PrimaryButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.backgroundButton};
  color: ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.scrollbarThumbHover};
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.scrollbarTrack};

  &:hover {
    background-color: ${({ theme }) => theme.scrollbarTrack};
    color: ${({ theme }) => theme.backgroundButton};
  }
`;

export const WaveDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${({ theme }) => theme.background};
`;

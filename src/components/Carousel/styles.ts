import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(34, 197, 94, 0.1) 0%,
    rgba(34, 197, 94, 0.2) 50%,
    rgba(34, 197, 94, 0.1) 100%
  );
  padding: 3rem 0;
  position: relative;
  border-top: 1px solid rgba(34, 197, 94, 0.2);
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const LogoList = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  animation: scroll 30s linear infinite;
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const LogoContainer = styled.div`
  height: 8rem;
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: all 0.3s ease;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    filter: grayscale(0%) brightness(1);
    opacity: 1;
    transform: scale(1.1);
  }

  &.fallback {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 600;
      filter: grayscale(100%) brightness(0.8);
      opacity: 0.7;
      transform: all 0.3s ease;
    }

    &:hover span {
      filter: grayscale(1%) brightness(1);
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

export const TrackWrapper = styled.div`
  width: 100vw;
  position: relative;

  &::before,
  &::after {
    content: "";
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(34, 197, 94, 0.2), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(34, 197, 94, 0.2), transparent);
  }
`;

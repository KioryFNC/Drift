import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  max-width: 36rem;
  margin: 0 auto 3rem;

  h3 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const GridMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px -2px rgba(34, 197, 94, 0.3),
    0 6px 12px -4px rgba(34, 197, 94, 0.2);
  transition: all 0.4s ease;
  position: relative;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.4),
      0 10px 15px -5px rgba(34, 197, 94, 0.3);
    transform: translateY(-8px) scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(34, 197, 94, 0.3) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:after::after {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 80rem;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.75rem;
  background-color: rgba(34, 197, 94, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  z-index: 60;

  &:hover {
    background-color: rgba(34, 197, 94, 0.6);
    transform: scale(1.1);
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.4);
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const GalleryTextContent = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 1024px) {
    width: 40%;
    text-align: left;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 1.5rem;
  }
`;

export const GalleryImageGrid = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

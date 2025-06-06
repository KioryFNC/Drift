import { useState } from "react";
import * as Element from "./styles";
import { X } from "lucide-react";
import { SectionContainer } from "../SectionContainer";

const galleryImages = [
  "https://images.unsplash.com/photo-1619470723017-1964ef5769c6?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1619864066877-926b1c1d5a1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  "https://images.unsplash.com/photo-1647943093697-4a78989f1ea7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionContainer id="gallery" className="bg-background">
      <Element.Header>
        <h3>Galeria</h3>
        <h2>Momentos nas Pistas</h2>
        <p>
          Confira os melhores momentos da carreira de Takumi nas competições de
          drift pelo mundo.
        </p>
      </Element.Header>

      <Element.GalleryContainer>
        <Element.GalleryTextContent>
          <h3>Conquistas em Imagens</h3>
          <p>
            Cada imagem conta uma história de desafio, superação e vitória nas
            pistas mais difíceis do mundo do drift.
          </p>
          <p>
            De campeonatos nacionais a competições internacionais, Takumi deixa
            sua marca com manobras precisas e controle excepcional.
          </p>
        </Element.GalleryTextContent>

        <Element.GalleryImageGrid>
          <Element.GridMain>
            {galleryImages.slice(0, 3).map((image, index) => (
              <Element.ImageContainer
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <Element.Image src={image} alt={`Galeria imagem${index + 1}`} />
              </Element.ImageContainer>
            ))}
          </Element.GridMain>
        </Element.GalleryImageGrid>
      </Element.GalleryContainer>

      <Element.GridMain>
        {galleryImages.slice(3).map((image, index) => (
          <Element.ImageContainer
            key={index + 3}
            onClick={() => setSelectedImage(image)}
          >
            <Element.Image src={image} alt={`Galeria imagem${index + 4}`} />
          </Element.ImageContainer>
        ))}
      </Element.GridMain>

      {selectedImage && (
        <Element.Modal onClick={() => setSelectedImage(null)}>
          <Element.ModalContent>
            <Element.CloseButton
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </Element.CloseButton>
            <Element.ModalImage
              src={selectedImage.replace(
                "w=500&h=500&q=80",
                "w=1200&h=800&q=90"
              )}
              alt="Imagem ampliada"
            />
          </Element.ModalContent>
        </Element.Modal>
      )}
    </SectionContainer>
  );
}

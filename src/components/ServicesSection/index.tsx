import type React from "react";
import * as Element from "./styles";
import { Award, Flag, Trophy } from "lucide-react";
import { SectionContainer } from "../SectionContainer";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Element.Card>
    <Element.IconWrapper>{icon}</Element.IconWrapper>
    <Element.CardTitle>{title}</Element.CardTitle>
    <Element.CardDescription>{description}</Element.CardDescription>
  </Element.Card>
);

export function ServicesSection() {
  const services = [
    {
      icon: <Flag size={32} />,
      title: "Competições",
      description:
        "Participação em mais de 20 eventos por temporada, incluindo campeonatos nacionais e internacionais de drift.",
    },
    {
      icon: <Award size={32} />,
      title: "Demonstrações",
      description:
        "Shows de drift para eventos corporativos, feiras automobilísticas e lançamentos de produtos automotivos.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Treinamentos",
      description:
        "Cursos e workshops exclusivos para pilotos iniciantes e avançados que desejam aperfeiçoar técnicas de drift.",
    },
  ];

  return (
    <SectionContainer id="services" className="bg-muted/30">
      <Element.Header>
        <Element.Subtitle>O Que Fazemos</Element.Subtitle>
        <Element.Title>Drift Profissional</Element.Title>
        <Element.Description>
          Takumi Fujiwara é um dos principais nomes do drift mundial,
          reconhecido por sua técnica impecável e estilo único nas pistas.
        </Element.Description>
      </Element.Header>

      <Element.Grid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </Element.Grid>

      <Element.ContentContainer>
        <Element.ServiceContent>
          <Element.ContentTitle>
            Campeonato Nacional de Drift
          </Element.ContentTitle>
          <Element.ContentDescription>
            Takumi é tetracampeão do Campeonato Nacional de Drift, com mais de
            30 pódios em sua carreira, estabelecendo recordes de pontuação.
          </Element.ContentDescription>
          <Element.FeatureList>
            <Element.FeatureItem>
              Campeão Nacional (2018, 2020, 2022, 2024)
            </Element.FeatureItem>
            <Element.FeatureItem>
              Melhor piloto revelação (2017)
            </Element.FeatureItem>
            <Element.FeatureItem>
              Recorde de derrapagem controlada
            </Element.FeatureItem>
            <Element.FeatureItem>
              Embaixador da Federação Nacional de Drift
            </Element.FeatureItem>
          </Element.FeatureList>
        </Element.ServiceContent>

        <Element.ServiceImage>
          <img
            src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Carro de drift em competição"
          />
        </Element.ServiceImage>
      </Element.ContentContainer>

      <Element.ContentContainer>
        <Element.ServiceImage>
          <img
            src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Piloto de drift"
          />
        </Element.ServiceImage>

        <Element.ServiceContent>
          <Element.ContentTitle>Treinamento Avançado</Element.ContentTitle>
          <Element.ContentDescription>
            A Drift Academy de Takumi Fujiwara oferece cursos exclusivos para
            pilotos que desejam aprimorar suas habilidades nas mais complexas
            técnicas de drift.
          </Element.ContentDescription>
          <Element.FeatureList>
            <Element.FeatureItem>
              Técnicas avançadas de controle de derrapagem
            </Element.FeatureItem>
            <Element.FeatureItem>
              Preparação de veículos para competição
            </Element.FeatureItem>
            <Element.FeatureItem>
              Estratégias para competições profissionais
            </Element.FeatureItem>
            <Element.FeatureItem>
              Simuladores profissionais de última geração
            </Element.FeatureItem>
          </Element.FeatureList>
        </Element.ServiceContent>
      </Element.ContentContainer>
    </SectionContainer>
  );
}

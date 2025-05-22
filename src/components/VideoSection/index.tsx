import { SectionContainer } from "../SectionContainer";
import * as Element from "./styles";

export function VideoSection() {
  return (
    <SectionContainer id="video" className="bg-muted/30">
      <Element.Container>
        <Element.VideoContent>
          <Element.VideoWrapper>
            <Element.VideoFrame
              src="https://www.youtube.com/embed/c_E_hK8jYAg"
              title="Tamuki Drift Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Element.VideoWrapper>
        </Element.VideoContent>

        <Element.TextContent>
          <Element.Title>A Arte do Drift</Element.Title>
          <Element.Description>
            O drift é mais que um esporte, é uma arte que exige precisão,
            coragem e um controle excepcional do veículo. Takumi dominou essa
            arte através de anos de dedicação e treinamento intensivo.
          </Element.Description>
          <Element.Description>
            Assista aos melhores momentos de suas performances, com manobras que
            desafiam os limites da física e demonstram por que ele é considerado
            uma lenda do drift.
          </Element.Description>
          <Element.FeatureList>
            <Element.FeatureItem>
              Técnica de entrada em ângulo perfeito
            </Element.FeatureItem>
            <Element.FeatureItem>
              Controle preciso de aceleração em derrapagem
            </Element.FeatureItem>
            <Element.FeatureItem>
              Transições fluidas entre curvas
            </Element.FeatureItem>
            <Element.FeatureItem>
              Manobras ousadas em alta velocidade
            </Element.FeatureItem>
          </Element.FeatureList>
        </Element.TextContent>
      </Element.Container>
    </SectionContainer>
  );
}

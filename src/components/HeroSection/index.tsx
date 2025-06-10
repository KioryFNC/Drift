import * as Element from "./styles";
export function HeroSection() {
  return (
    <Element.Section id="home">
      <Element.BackgroundPattern>
        <Element.TopGradient />
        <Element.BottomGradient />
      </Element.BackgroundPattern>

      <Element.Container>
        <Element.ContentBox>
          <Element.Heading>
            Takumi <span className="gradient-name">Fujiwara</span>
          </Element.Heading>
          <p>
            Piloto profissional de drift com mais de 50 vitórias em competições
            nacionais e internacionais. Conheça a trajetória do mestre das
            curvas.
          </p>
          <Element.ButtonGroup>
            <Element.PrimaryButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Agendar Evento
            </Element.PrimaryButton>
            <Element.SecondaryButton
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Galeria
            </Element.SecondaryButton>
          </Element.ButtonGroup>
        </Element.ContentBox>

        <Element.HeroImage>
          <img
            src="https://images.unsplash.com/photo-1695285157832-ea00ead87934?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Carro de drift em ação"
            loading="eager"
          />
        </Element.HeroImage>
      </Element.Container>

      <Element.WaveDivider>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Element.WaveDivider>
    </Element.Section>
  );
}

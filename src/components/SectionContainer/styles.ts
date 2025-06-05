import styled from "styled-components";

interface ContainerProps {
  $visible: boolean;
}

export const Section = styled.section`
  padding: 6rem 1rem;
`;

export const Container = styled.div<ContainerProps>`
  max-width: 1280px;
  margin: 0 auto;
  transition: all 0.7s ease;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) =>
    props.$visible ? "translateY(0)" : "translateY(2.5rem)"};
`;

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

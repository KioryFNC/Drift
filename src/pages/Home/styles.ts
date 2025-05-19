import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  color: ${(props) => props.theme.textColor};
  transition: color 0.4s ease-in-out;
`;

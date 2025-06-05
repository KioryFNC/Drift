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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div``;
export const InfoTitle = styled.h4``;
export const InfoText = styled.p``;
export const InfoList = styled.div``;
export const InfoItem = styled.div``;
export const InfoIcon = styled.div``;
export const InfoContent = styled.div``;
export const InfoLabel = styled.p``;
export const InfoValue = styled.p``;
export const ContactForm = styled.form``;
export const FormGroup = styled.div``;
export const Label = styled.label``;
export const ErrorMessage = styled.span``;
export const Input = styled.input``;
export const Textarea = styled.textarea``;
export const SubmitButton = styled.button``;

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

export const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.scrollbarTrack};
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border: 2px solid #16a34a;
  box-shadow: 0 5px 15px rgba(34, 197, 94, 0.25);

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.2),
      transparent 70%
    );
    z-index: 0;
  }
`;

export const InfoTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  z-index: 1;
`;

export const InfoText = styled.p`
  position: relative;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 2rem;
  z-index: 1;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
  position: relative;
  z-index: 1;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-top: -0.25rem;
`;

export const InfoContent = styled.div``;

export const InfoLabel = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textColor};
`;

export const InfoValue = styled.p`
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  &:hover {
    background-color: #16a34a;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:nth-child(5),
  &:nth-child(6) {
    grid-column: 1 / -1;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ErrorMessage = styled.span`
  color: #ea384c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 2px solid #22c55e;
  padding: 0 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.2);
  color: ${({ theme }) => theme.textColor};

  &:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.6;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 0.375rem;
  border: 2px solid #22c55e;
  background-color: ${({ theme }) => theme.background};
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  resize: vertical;
  min-height: 6rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.2);
  color: ${({ theme }) => theme.textColor};

  &:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  grid-column: 1 /-1;
  background-color: #22c55e;
  color: white;
  height: 3rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3);

  &:hover {
    background-color: #16a34a;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const VideoContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const TextContent = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0 2rem;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio*/
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.25),
    0 10px 10px -5px rgba(34, 197, 94, 0.15);
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0.5rem;
`;

export const Title = styled.h3`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;

  &:before {
    content: "✓";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    background-color: #fff;
    border-radius: 50%;
    color: #fff;
    margin-right: 0.75rem;
    font-size: 0.875rem;
  }
`;

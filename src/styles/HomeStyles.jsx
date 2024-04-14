import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 4.5rem;

  @media screen and (max-width: 1130px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 2.5rem;

  @media screen and (max-width: 1130px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.body};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const TextContainer = styled.div`
  width: auto;
  font-size: 3rem;
  color: ${({ theme }) => theme.textContainer};

  @media screen and (max-width: 1130px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.7rem;
  }
`;

export const Wrapper = styled.div`
  padding: 5rem 0; 
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1130px) {
    padding: 8rem 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 320px) {
    padding: 2rem 0;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.span};
`;

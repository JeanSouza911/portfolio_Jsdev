import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 15rem;

  @media screen and (max-width: 1130px) {
    margin: 8rem;
  }

  @media screen and (max-width: 768px) {
    margin: 6rem;
  }

  @media screen and (max-width: 480px) {
    margin: 4rem;
  }

  @media screen and (max-width: 320px) {
    margin: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: 4.5rem;

  @media screen and (max-width: 1130px) {
    font-size: 4rem;
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
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.span};
`;

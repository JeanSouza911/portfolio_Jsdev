import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 10rem;
`;

export const Heading = styled.h1`
  font-size: 4.5rem;
`;

export const Paragraph = styled.p`
  font-size: 2.5rem;
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.button};
  color: ${({theme}) => theme.body};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const TextContainer = styled.div`
  width: auto;
  font-size: 3.3rem;
  color: ${({ theme }) => theme.textContainer};
`;

 export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.span};
`;

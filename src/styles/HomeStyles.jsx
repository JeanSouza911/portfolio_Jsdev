import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 10rem;
`;

export const Heading = styled.h1`
  display: flex;
  font-size: 4.6rem;
`;

export const Paragraph = styled.p`
  font-size: 3rem;
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
  font-size: 3.3rem;
  color: ${({ theme }) => theme.textContainer};
`;

 export const Wrapper = styled.div`
  height: 50rem;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.span};
`;

import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Project = styled.div`
  margin: 5rem 2rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  padding: 1rem;
`;

export const Description = styled.p`
  width: 30rem;
  height: 10rem;
  font-size: 1.4rem;
  text-align: center;
`;


export const Link = styled.a`
  &:hover {
    color: #af7502;
  }
  img{
    box-shadow: 0 0 0.5rem;
    height: 350px;
    width: 500px;
    border-radius: 2rem;
  }
`;

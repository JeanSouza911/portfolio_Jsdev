import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  margin: 5rem auto;
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

  @media screen and (max-width: 1130px) {
    margin: 3rem 1rem;
  }

  @media screen and (max-width: 768px) {
    margin: 2rem 1rem;
  }

  @media screen and (max-width: 480px) {
    margin: 1rem 0.5rem;
  }

  @media screen and (max-width: 320px) {
    margin: 0.5rem 0.25rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  padding: 1rem;

  @media screen and (max-width: 1130px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  height: 5rem;
  width: 100%;
  max-width: 30rem;
  font-size: 1.4rem;
  text-align: center;

  @media screen and (max-width: 1130px) {
    font-size: 1.3rem;
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

export const Link = styled.a`
  &:hover {
    color: #af7502;
  }

  img{
    box-shadow: 0 0 0.5rem;
    height: 350px;
    width: 500px;
    border-radius: 2rem;

    @media screen and (max-width: 1130px) {
      height: 300px;
      width: 400px;
    }

    @media screen and (max-width: 768px) {
      height: 250px;
      width: 350px;
    }

    @media screen and (max-width: 480px) {
      height: 200px;
      width: 300px;
    }

    @media screen and (max-width: 320px) {
      height: 150px;
      width: 250px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;

  @media screen and (max-width: 1130px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

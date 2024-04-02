import styled from 'styled-components';

export const Container = styled.div`
  margin:8rem auto;
  text-align: center;
  width: 70%;

  h1{
    font-size: 2rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 1130px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  list-style: none;
`;

export const ContactItem = styled.li`
  margin: 3rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  p{
    font-size: 2rem;
    width: 10rem;
    margin-top: 1rem;

    @media screen and (max-width: 1130px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  width: 10rem;
  font-size: 5rem;
  border-radius: 10%;

  @media screen and (max-width: 1130px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

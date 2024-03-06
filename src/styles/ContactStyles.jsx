import styled from 'styled-components';

export const Container = styled.div`
  margin:10rem auto;
  text-align: center;
  width: 70%;

  h1{
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
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
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  width: 10rem;
  font-size: 8rem;
  border-radius: 10%;
  box-shadow: 0 0 1rem;
`;
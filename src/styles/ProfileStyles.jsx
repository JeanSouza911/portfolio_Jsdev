import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 1rem auto;

  @media screen and (max-width: 1130px) {
    width: 70%;
    margin: 1rem auto;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 4rem auto;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 3rem auto;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    margin: 2rem auto;
  }
`;

export const ProfileImage = styled.img`
  display: flex;
  margin: 2rem auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;

  @media screen and (max-width: 1130px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
  }
`;

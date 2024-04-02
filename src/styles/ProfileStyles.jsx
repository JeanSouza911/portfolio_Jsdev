import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15rem auto;

  @media screen and (max-width: 1130px) {
    width: 70%;
    margin: 5rem auto;
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
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media screen and (max-width: 1130px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
  }
`;

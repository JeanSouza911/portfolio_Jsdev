import styled from "styled-components";

export const Container = styled.div`
   margin: 8rem auto; 
   padding: 1rem;
   width: 90%; 
   max-width: 900px;
   overflow-wrap: break-word;
   box-shadow: 0 0 1rem;
   border-radius: 10px;

   @media screen and (max-width: 1130px) {
     width: 90%;
     margin: 1rem auto;
   }

   @media screen and (max-width: 768px) {
     width: 90%;
     margin: 1rem auto;
   }

   @media screen and (max-width: 480px) {
     width: 90%;
     margin: 1rem auto;
   }

   @media screen and (max-width: 320px) {
     width: 90%; 
     margin: 0.5rem auto;
     padding: 0.5rem;
   }
`;

export const Heading = styled.h1`
    font-size: 3.5rem;
    margin: 1rem;

    @media screen and (max-width: 1130px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.5rem;
    margin: 1rem;

    @media screen and (max-width: 1130px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.span};
  font-size: 3.5rem;

  @media screen and (max-width: 1130px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
`;

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  color: ${({ theme }) => theme.span};
`;

export const BadgeItem = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 3.5rem;

    p{
        text-align: center;
        font-size: 1.8rem;

    @media screen and (max-width: 1130px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 0.8rem;
    }
    }
    
    @media screen and (max-width: 1130px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
`;

export const Footer = styled.footer`
    display: flex;
    margin-top: 1.5rem;
    font-size: 2.2rem;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 1130px) {
      font-size: 1.7rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    font-size: 1.5rem;
    margin: 1rem auto;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItem = styled.div`
    display: flex;
    gap: 6rem;
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    margin-right: 5rem;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
  `;









import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    font-size: 1.5rem;
    margin: 1rem auto;
    width: 90%;
    max-width: 800px;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style-type: none; 
`;

export const MenuItem = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    margin-right: 2rem;
    margin-bottom: 1rem; 

    &:hover {
        color: ${({ theme }) => theme.hover};
    }
`;

import PropTypes from 'prop-types';
import { Nav, Menu, MenuItem, StyledLink } from "../styles/NavStyles";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='about'>Sobre</StyledLink>
          <StyledLink to='projects'>Projetos</StyledLink>
          <StyledLink to='contact'>Contato</StyledLink>
          {theme === 'light' ? (
            <FaSun onClick={toggleTheme} style={{ cursor: 'pointer'}} />
          ) : (
            <FaMoon onClick={toggleTheme} style={{ cursor: 'pointer'}} />
          )}
        </MenuItem>
      </Menu>
    </Nav>
  );
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;

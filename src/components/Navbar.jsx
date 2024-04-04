import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Nav, Menu, MenuItem, StyledLink } from "../styles/NavStyles";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 595px)');
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {theme === 'light' ? (
            <FaMoon onClick={toggleTheme} style={{ cursor: 'pointer' }} />
          ) : (
            <FaSun onClick={toggleTheme} style={{ cursor: 'pointer' }} />
          )}
        </div>
        {isSmallScreen && (
          <div onClick={handleToggleMenu} style={{ cursor: 'pointer' }}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>
      {isSmallScreen && isMenuOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#333', padding: '10px', position: 'absolute', width:'100%', zIndex: '1', height: '10rem' }}>
          <StyledLink to='/' onClick={handleCloseMenu}>Home</StyledLink>
          <StyledLink to='/about' onClick={handleCloseMenu}>Sobre</StyledLink>
          <StyledLink to='/projects' onClick={handleCloseMenu}>Projetos</StyledLink>
          <StyledLink to='/contact' onClick={handleCloseMenu}>Contato</StyledLink>
        </div>
      )}
      {!isSmallScreen && (
        <Menu style={{ display: isMenuOpen ? 'block' : 'flex' }}>
          <MenuItem>
            <StyledLink to='/' onClick={handleCloseMenu}>Home</StyledLink>
            <StyledLink to='/about' onClick={handleCloseMenu}>Sobre</StyledLink>
            <StyledLink to='/projects' onClick={handleCloseMenu}>Projetos</StyledLink>
            <StyledLink to='/contact' onClick={handleCloseMenu}>Contato</StyledLink>
          </MenuItem>
        </Menu>
      )}
    </Nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;

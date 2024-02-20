import React, { useState } from 'react';
import './Navbar.css'; // Estilos CSS para a barra de navegação
import { Link } from 'react-scroll'; // Importe Link from react-scroll

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='container'>
      <nav className="navbar">
        <div className="navbar-logo">
        <a href="/" className="navbar-logo">
  <p>Bruno Soares</p>
</a>
        </div>
        <div className='navbar-buttons'>
          <Link to="sectionProjects" smooth={true} duration={500} className="nav-button">Projects</Link>
          <Link to="sectionAbout" smooth={true} duration={500} className="nav-button">About me</Link>
          <Link to="sectionSkills" smooth={true} duration={500} className="nav-button">Skills</Link>
          <a href="https://wa.me/5511996940393" target="_blank" rel="noopener noreferrer" className="nav-button">Hire me!</a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${showMenu ? 'open' : ''}`}></div>
          <div className={`line ${showMenu ? 'open' : ''}`}></div>
          <div className={`line ${showMenu ? 'open' : ''}`}></div>
        </div>
      </nav>
      <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
      <Link to="sectionProjects" smooth={true} duration={500} className="nav-button">Projects</Link>
          <Link to="sectionAbout" smooth={true} duration={500} className="nav-button">About me</Link>
          <Link to="sectionSkills" smooth={true} duration={500} className="nav-button">Skills</Link>
          <a href="https://wa.me/5511996940393" target="_blank" rel="noopener noreferrer" className="nav-button">Hire me!</a>
      </div>
    </div>
  );
};

export default Navbar;

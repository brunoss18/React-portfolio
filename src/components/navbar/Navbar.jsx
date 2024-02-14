import React, { useState } from 'react';
import './Navbar.css'; // Estilos CSS para a barra de navegação
import { Link } from 'react-router-dom'; // Importe o Link

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='conteiner'>
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"> 
      <p>Bruno Soares</p>
          </Link>
       
      </div>
      <div className='navbar-buttons' >
    <button className="nav-button">About me</button>
    <button className="nav-button">Projects</button>
    <button className="nav-button">Hire me</button>
  </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${showMenu ? 'open' : ''}`}></div>
        <div className={`line ${showMenu ? 'open' : ''}`}></div>
        <div className={`line ${showMenu ? 'open' : ''}`}></div>
      </div>
    </nav>
    <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
    <button className="nav-button">About me</button>
    <button className="nav-button">Projects</button>
    <button className="nav-button">Hire me</button>
  </div>
  </div>
  );
};

export default Navbar;

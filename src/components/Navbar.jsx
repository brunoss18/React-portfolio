import React, { useState } from 'react';
import './Navbar.css'; // Importe os estilos CSS do componente

function Navbar() {
  // Defina um estado para controlar a exibição do menu hambúrguer em dispositivos móveis
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu hambúrguer
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <span className='nameLogo'>Bruno Soares</span>
      <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ol>
          <li>About me</li>
          <li>Projects</li>
          <li>Hire me</li>
        </ol>
      </div>
      {/* Botão do menu hambúrguer para dispositivos móveis */}
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </nav>
  );
}

export default Navbar;

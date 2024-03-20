import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/skills">Compétences</Link></li>
          <li><Link to="/about">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
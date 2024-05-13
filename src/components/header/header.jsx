import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/T.png';

const Header = () => {
  return (
    <header className="header"> {/* Ajoutez une classe à votre en-tête */}
      <div className='ownerContainer'>
        <h1 className="logo-container"> {/* Créez un conteneur pour votre logo */}
          <img src={logo} alt="Logo" className="logo" /> {/* Utilisez la balise img pour afficher l'image */}
        </h1>
        <h2 className='ownerName'>Thibaud Monpetit - Développeur web</h2>
      </div>
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
import React from 'react';
import './cadre.scss';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

const Cadre = ({ titre, url, imageAlt, imageUrl }) => { // Ajoutez les props url, imageAlt et imageUrl
  return (
    <div className="cadre-container">
      <div className='img-container'>
        <Link to={url} target="_blank" rel="noopener noreferrer"> {/* Utilisez Link pour créer le lien */}
          <img src={imageUrl} alt={imageAlt} /> {/* Utilisez imageUrl et imageAlt */}
        </Link>
      </div>
      <h2>{titre}</h2>
    </div>
  );
};

export default Cadre;
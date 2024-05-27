import React from 'react';
import './cadre.scss';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

const Cadre = ({ titre, description, langage, competences, url, imageAlt, imageUrl, codeSourceUrl }) => { // Ajoutez les props url, imageAlt et imageUrl
  return (
    <div className="cadre-container">
      <div className='img-container'>
        <img src={imageUrl} alt={imageAlt} /> {/* Utilisez imageUrl et imageAlt */}
      </div>
      <div className='textContainer'>
        <h2>{titre}</h2>
        <div className='textPlace'>
          <div className='description'>{description}</div>
          <div className='langages'>{langage}</div>
          <ul className='competences'>
            {competences.map((competence, index) => (
              <li key={index}>{competence}</li>
            ))}
          </ul>
        </div>
        <div className='linkPlace'>
          <Link to={url} target="_blank" rel="noopener noreferrer" className='siteOverview'>
            Voir le site
          </Link>
          <Link to={codeSourceUrl} target="_blank" rel="noopener noreferrer" className='codeSource'>
            <div>
              Afficher le code source
            </div>
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Cadre;

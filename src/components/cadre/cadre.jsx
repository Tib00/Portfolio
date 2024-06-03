import React from 'react';
import './cadre.scss';
import { Link } from 'react-router-dom';

const Cadre = ({ titre, description, langage, competences, url, imageAlt, imageUrl, codeSourceUrl }) => {
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
          {url ? (
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className='siteOverview'
            >
              Voir le site
            </Link>
          ) : (
            <div className='siteOverview disabled'>
              Voir le site
            </div>
          )}
          {codeSourceUrl ? (
            <Link
              to={codeSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='codeSource'
            >
              <div>
                Afficher le code source
              </div>
            </Link>
          ) : (
            <div className='codeSource disabled'>
              <div>
                Afficher le code source
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadre;

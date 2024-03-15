import React from 'react';
import Cadre from '../../components/cadre/cadre'

function Portfolio() {
  const sitesWeb = [
    { titre: 'Site Web 1', url: 'https://www.example1.com' },
    { titre: 'Site Web 2', url: 'https://www.example2.com' },
    // Ajoutez d'autres sites web ici si nécessaire
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="liste-sites-web">
        {sitesWeb.map((site, index) => (
          <Cadre key={index} titre={site.titre}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </Cadre>
        ))}
      </div>
    </div>
  );
}


export default Portfolio;
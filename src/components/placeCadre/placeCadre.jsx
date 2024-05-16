import React from 'react';
import './placeCadre.scss';
import Cadre from '../cadre/cadre'; // Importez le composant Cadre

const PlaceCadre = ({ sitesWeb }) => {
  return (
    <div className="liste-sites-web">
      {sitesWeb.map((site, index) => (
        <Cadre
          key={index}
          titre={site.titre}
          url={site.url} // Passez l'URL du site comme prop à Cadre
          imageAlt={site.titre} // Passez le texte alternatif de l'image comme prop à Cadre
          imageUrl={site.image} // Passez l'URL de l'image comme prop à Cadre
          codeSourceUrl={site.codeSourceUrl} // Passez les liens de code source
        />
      ))}
    </div>
  );
};

export default PlaceCadre;
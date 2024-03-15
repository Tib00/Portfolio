import React from 'react';
import './cadre.scss';

const Cadre = ({ title, cover, url }) => {
  return (
    <div className="cadre-container">
      <div className="cadre-component">
        <div className="cadre-content">
          <img src={cover} alt={title} className="cadre-cover" />
          <h3>{title}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer">Visiter le site</a>
        </div>
      </div>
    </div>
  );
};

export default Cadre;
import React from 'react';
import './portfolio.scss';

import PlaceCadre from '../../components/placeCadre/placeCadre'; // Importez le composant PlaceCadre
import SiteWeb2Image from '../../assets/fond_1.jpg';
import SiteWeb1Image from '../../assets/fond_2.jpg';
import SiteWeb3Image from '../../assets/fond_4.jpg';
import SiteWeb4Image from '../../assets/fond_5.jpg';
import SiteWeb5Image from '../../assets/fond_6.jpg';

function Portfolio() {
  const sitesWeb = [
    {
      titre: 'Site web d\'annonces de logements',
      image: SiteWeb1Image,
      url: 'https://tib00.github.io/Projet_2_Booki/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_2_Booki.git'
    },
    {
      titre: 'Site de designer',
      image: SiteWeb2Image,
      url: 'https://github.com/Tib00/Projet_3_Buel',
      codeSourceUrl: 'https://github.com/Tib00/Projet_3_Buel.git'
    },
    {
      titre: 'Site de photographe',
      image: SiteWeb3Image,
      url: 'https://tib00.github.io/Projet_5_Carducci/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_5_Carducci.git'
    },
    {
      titre: 'Site d\'annonces immobilières',
      image: SiteWeb4Image,
      url: 'https://projet-6-kasa-three.vercel.app/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_6_Kasa.git'
    },
    {
      titre: 'Site de vente de livres',
      image: SiteWeb5Image,
      url: 'https://projet-7-book.vercel.app/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_7_Book.git'
    },
    {
      titre: 'Site test',
      image: SiteWeb5Image,
      url: 'https://github.com/Tib00/Erevia.git',
      codeSourceUrl: 'https://github.com/Tib00/Erevia.git'
    },
    // Ajoutez d'autres sites web ici si nécessaire
  ];

  return (
    <div>
      <h2 className="portfolio-title">Quelques unes de mes créations</h2>
      {/* Utilisez PlaceCadre et passez-lui les données des sites Web en tant que propriété */}
      <PlaceCadre sitesWeb={sitesWeb} />
    </div>
  );
}

export default Portfolio;
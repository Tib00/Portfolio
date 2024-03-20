import React from 'react';
import PlaceCadre from '../../components/placeCadre/placeCadre'; // Importez le composant PlaceCadre
import SiteWeb2Image from '../../assets/fond_1.jpg';
import SiteWeb1Image from '../../assets/fond_2.jpg';
import SiteWeb3Image from '../../assets/fond_4.jpg';
import SiteWeb4Image from '../../assets/fond_5.jpg';
import SiteWeb5Image from '../../assets/fond_6.jpg';
import SiteWeb6Image from '../../assets/fond_3.jpg';

function Portfolio() {
  const sitesWeb = [
    { titre: 'Site web d\'annonces de logements', image: SiteWeb1Image, url: 'https://tib00.github.io/Projet_2_Booki/' },
    { titre: 'Site de designer', image: SiteWeb2Image, url: '' },
    { titre: 'Site de photographe', image: SiteWeb3Image, url: 'https://tib00.github.io/Projet_5_Carducci/' },
    { titre: 'Site d\'annonces immobilières', image: SiteWeb4Image, url: '' },
    { titre: 'Site de vente de livres', image: SiteWeb5Image, url: '' },
    { titre: 'Site Web 6', image: SiteWeb6Image, url: '' },
    // Ajoutez d'autres sites web ici si nécessaire
  ];

  return (
    <div>
      <h2>Quelques uns de mes sites webs</h2>
      {/* Utilisez PlaceCadre et passez-lui les données des sites Web en tant que propriété */}
      <PlaceCadre sitesWeb={sitesWeb} />
    </div>
  );
}

export default Portfolio;
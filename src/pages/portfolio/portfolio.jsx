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
      titre: 'Booki',
      image: SiteWeb1Image,
      url: 'https://tib00.github.io/Projet_2_Booki/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_2_Booki.git',
      description: 'Un site web de location d\'appartements',
      langage: 'Langages: HTML et CSS',
      competences: ['Compétences:',
        'Découpage de site selon une maquette',
        'Conception de site responsive',
        'Validation par le w3c'
      ]
    },
    {
      titre: 'Portfolio de Sophie Bluel',
      image: SiteWeb2Image,
      url: 'https://github.com/Tib00/Projet_3_Buel',
      codeSourceUrl: 'https://github.com/Tib00/Projet_3_Buel.git',
      description: 'Un site de designer lui permettant de modifier sa galerie',
      langage: 'Langage: Javascript',
      competences: [
        'Compétences:',
        'Introduction à la sécurité par jetons JWT',
        'Mise en ligne d\'images',
        'Protection de l\'utilisateur'
      ]
    },
    {
      titre: 'Site de la photographe Nina Carducci',
      image: SiteWeb3Image,
      url: 'https://tib00.github.io/Projet_5_Carducci/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_5_Carducci.git',
      description: 'Un portfolio de photographe débuggé et optimisé',
      langage: 'Langages: HTML et CSS',
      competences: [
        'Compétences:',
        'Optimisation des performances d\'un site',
        'Debug grâce aux dev tools',
        'Rédaction d\'un cahier de recettes pour tester un site'
      ]
    },
    {
      titre: 'Kasa',
      image: SiteWeb4Image,
      url: 'https://projet-6-kasa-three.vercel.app/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_6_Kasa.git',
      description: 'Un Site d\'annonces immobilières',
      langage: 'Technologie: React',
      competences: [
        'Compétences:',
        'Initialiser un projet REACT',
        'Apprentissage du découpage de projets',
        'Apprentissage de la logique des props et des hooks'
      ]
    },
    {
      titre: 'Mon vieux grimoire',
      image: SiteWeb5Image,
      url: 'https://projet-7-book.vercel.app/',
      codeSourceUrl: 'https://github.com/Tib00/Projet_7_Book.git',
      description: 'Un site web de location d\'appartements',
      langage: 'Technologies: Express MongoDB et NodeJS',
      competences: [
        'Compétences:',
        'Création d\'un serveur avec EXPRESS',
        'Création d\'une base de donnée MongoDB',
        'Sécurisation d\'un serveur'
      ]
    },

    // Ajoutez d'autres sites web ici si nécessaire
  ];

  return (
    <div>
      <h2 className="portfolio-title">Mes créations</h2>
      {/* Utilisez PlaceCadre et passez-lui les données des sites Web en tant que propriété */}
      <PlaceCadre sitesWeb={sitesWeb} />
    </div>
  );
}

export default Portfolio;

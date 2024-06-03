import React from 'react';
import './home.scss';
import computer from '../../assets/image_de_fond.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="content">
          <h2>Développeur web junior</h2> 
          <p>Bonjour,<br />
          Je m'appelle Thibaud Monpetit, je suis un développeur web junior passionné par la création de solutions numériques innovantes. 
          Ayant récemment terminé ma formation en développement web chez <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer">OpenClassrooms</a>, j'ai acquis une solide maîtrise des technologies front-end et back-end, 
          me permettant de concevoir des sites web interactifs et performants.</p>
          <p>
          Actuellement à la recherche de nouvelles opportunités de travail,
          je sollicite votre attention afin de mettre en pratique mes compétences et de contribuer activement à des projets stimulants. 
          Mon objectif est de devenir un développeur full-stack compétent, 
          capable de prendre en charge des projets du début à la fin, tout en continuant à développer mes compétences techniques et interpersonnelles.
          </p>
          <p className='philosophy'>
          Ma philosophie:<br />
          "Au delà du code, le web pour moi c'est avant tout une aventure humaine, des échanges, des rencontres et un apprentissage permanent afin d'être chaque jour un peu plus compétent." 
          </p>
          <p className='future'>Actuellement en train de:<br/>Solidifier mes compétences back-end<br />Elargir mes compétences en sécurité<br/>Approfondir mes connaissance des langages backend (Ruby on rail)</p>
        </div>
      </div>
      <div className='placeButtons'>
        <img src={computer} alt="un écran" />
      </div>
    </div>
  );
}

export default Home;
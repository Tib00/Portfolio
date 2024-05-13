import React from 'react';
import './home.scss';
import Slider from '../../components/slider/slider'


const Home = () => {
  return (
    <div className="home-container">
        <Slider />
      <div className="content-container">
        <div className="content">
          <h2>Développeur web</h2> 
          <p>Au service de votre entreprise</p>
          <h2>Création de sites webs</h2>
          <p>Créez des expériences web exceptionnelles avec un développeur web créatif et innovant.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
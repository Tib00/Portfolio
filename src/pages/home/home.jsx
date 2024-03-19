// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="slider-container">
//       <h2>Développeur web</h2>
//       <p>Au service de votre entreprise</p>
//       <h2>Création de sites webs</h2>
//       <p>Créez des expériences web exceptionnelles avec un développeur web créatif et innovant.</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import './home.scss';
import Fond1 from '../../assets/fond_1.jpg';
import Fond2 from '../../assets/fond_2.jpg';
import Fond3 from '../../assets/fond_5.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % numSlides);
    }, 5000); // Changez le délai selon vos préférences

    return () => clearInterval(interval);
  }, [currentSlide]);

  const numSlides = 3; // Nombre total de slides
  const slideImages = [Fond1, Fond2, Fond3]; // Chemin des images

  return (
    <div className="home-container">
      <div className="slider-container">
        {slideImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? 'slider-image active' : 'slider-image'}
          />
        ))}
      </div>
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
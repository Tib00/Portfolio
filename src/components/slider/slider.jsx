import React, { useState, useEffect } from 'react';
import './slider.scss';
import Fond1 from '../../assets/fond_1.jpg';
import Fond2 from '../../assets/fond_2.jpg';
import Fond3 from '../../assets/fond_5.jpg';

const Slider = () => {
  const pictures = [Fond1, Fond2, Fond3]; // Tableau contenant vos images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Changement d'image toutes les 3 secondes (3000 millisecondes)

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, [pictures.length]); // Utilisez pictures.length comme dépendance pour s'assurer que l'effet est réexécuté lorsque le nombre d'images change

  return (
    <div className="sliderContainer">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
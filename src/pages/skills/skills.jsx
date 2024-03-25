import React from 'react';
import Collapse from '../../components/collapse/collapse'
import './skills.scss'

import { IoMdArrowDroprightCircle } from "react-icons/io";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className='placements'>
        <div className='placeLangage'>
        <h3>Langages connus</h3>
        <ul className="arrow-list">
          <li><IoMdArrowDroprightCircle /> HTML et CSS</li>
          <li><IoMdArrowDroprightCircle /> Javascript</li>
          <li><IoMdArrowDroprightCircle /> React frontend et backend</li>
          <li><IoMdArrowDroprightCircle /> Backend: MongoDB</li>
        </ul>
        </div>
        <div className='placeCollapse'>
          <Collapse title="Développement et intégration web">
              <p>Respect de vos maquettes et schémas<br />  Adaptations à vos contraintes techniques<br />  Implémentation d'interfaces responsives</p>
          </Collapse>
          <Collapse title="Optimisation et débug">
              <p>optimisation de sites<br />  Recherche et résolution de bugs<br />  Optimisation du référencement naturel (SEO)</p>
          </Collapse>
          <Collapse title="Gestion de projets">
              <p>Respect des délais impartis<br /> Rédaction, présentation et mise en oeuvre de solutions techniques pour vos clients <br /> Mise en place de veille technologique</p>
          </Collapse>
        </div>
      </div>       
    </div>
  );
};

export default Skills;
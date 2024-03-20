import React from 'react';
import Collapse from '../../components/collapse/collapse'
import './skills.scss'

const Skills = () => {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className='placements'>
        <div className='placeLangage'>
          <h3>Langages connus</h3>
          <p>
            html et CSS<br />
            Javascript<br />
            React frontend et backend<br />
            Backend: MongoDB<br />
          </p>
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
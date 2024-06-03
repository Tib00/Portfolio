import React from 'react';
import './skills.scss'
import html from '../../assets/logo_html.png'
import css from '../../assets/logo_css.png'
import js from '../../assets/logo_js.png'
import mongo from '../../assets/logo_mongo.png'
import react from '../../assets/logo_react.png'
import node from '../../assets/logo_node.png'



const Skills = () => {
  return (
    <div className="skills">
        <h2>Technologies</h2>
        <div className="front-end">
          <h3>Front-end</h3>
          <div className="technology">
            <img className='imgTreatment' src={html} alt="HTML logo" />
            <img className='imgTreatment' src={css} alt="CSS logo" />
            <img className='imgJs' src={js} alt="JavaScript logo" />
            <img className='imgTreatment' src={react} alt="react logo" />
          </div>
        </div>
        <div className="back-end">
          <h3>Back-end</h3>
          <div className="technology">
              <img src={mongo} alt="MongoDB logo" />
              <img src={node} alt="node logo" />
          </div>
        </div>
    </div>
  );
};

export default Skills;
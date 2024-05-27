import React from 'react';
import ContactForm from '../../components/contactform/contactForm'
import './about.scss'

const About = () => {
  return (
    <div className="about" id="coordonees" itemscope itemtype="http://schema.org/LocalBusiness">
      <h2>Contacts</h2>
      <h3>Une question ? Contactez moi</h3>
        <div className='alignContact'>
          < ContactForm />
          <div className='borderCoord'>
              <p itemprop="telephone"> Tel: 06 35 54 52 71</p> 
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"> 
              <p>Adresse: </p>
              <p itemprop="streetAddress">41 Cours Pinteville</p>
              <p itemprop="postalCode">77100</p> 
              <p itemprop="addressLocality">Meaux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
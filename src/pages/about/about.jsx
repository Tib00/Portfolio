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
              <p itemprop="telephone"> Tel: 01 23 45 67 89</p> 
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"> 
              <p>Adresse: </p>
              <p itemprop="streetAddress">4</p>
              <p itemprop="postalCode">00000</p> 
              <p itemprop="addressLocality">Bille</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
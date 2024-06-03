import React from 'react';
import ContactForm from '../../components/contactform/contactForm'
import './about.scss'

const About = () => {
  return (
    <div className="about" id="coordonees" itemScope itemType="http://schema.org/LocalBusiness">
      <h2>Contacts</h2>
      <h3>Une question ? Contactez moi</h3>
        <div className='alignContact'>
          < ContactForm />
          <div className='borderCoord'>
              <p itemProp="telephone"> Tel: 06 35 54 52 71</p> 
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress"> 
              <p>Adresse: </p>
              <p itemProp="streetAddress">41 Cours Pinteville</p>
              <p itemProp="postalCode">77100</p> 
              <p itemProp="addressLocality">Meaux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
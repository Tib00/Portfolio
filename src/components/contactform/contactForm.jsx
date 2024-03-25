import React from 'react';
import './contactForm.scss';

function ContactForm() {
  return (
    <div className="contact-form-container">
       <form id="contact" name="contact" method='POST' netlify>
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label>Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label >Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
            <div className="form-group">
            <label >Message :</label>
            <textarea id="message" name="message" required />
          </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
import React, { useState } from 'react';
import './contactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <div className="contact-form-container">
       <form method='POST' netlify>
        <input type="hidden" name="form-name" value="contact" />
          <label>Nom :</label>
          <input type="text" id="name" name="name" required />
          <label >Email :</label>
          <input type="email" id="email" name="email" required />
          <label >Message :</label>
          <textarea id="message" name="message" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
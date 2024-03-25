import React, { useState } from 'react';
import './contactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   console.log("Formulaire soumis, données du formulaire :", formData);
    
  //   fetch('http://localhost:3001/contact', { // Mettez à jour la route ici
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("Réponse du serveur :", data);
  //     // Ajoutez ici toute autre manipulation de la réponse du serveur si nécessaire
  //   })
  //   .catch((error) => console.error('Error:', error));
  // };

  return (
    <div className="contact-form-container">
       <form method='POST' netlify> {/*form onSubmit={handleSubmit} */}
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
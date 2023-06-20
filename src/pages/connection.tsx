import { Link } from "react-router-dom";
import "../styles/connection/connection.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import React, { useState } from 'react';

export default function ConnectionPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  // Envoie des données d'enregistrement au backend
  axios
    .post('http://localhost:3000/auth/login',  { email, password })
    .then((response) => {
      window.alert('Connecté avec succès');
      // Traitement de la réponse du backend (si nécessaire)
      console.log(response.data);
    })
    .catch((error) => {
      // Traitement de l'erreur en cas d'échec
      window.alert('Une erreur est survenue');
      console.error(error);
    });
};


return (
    <body>
      <div id = "ConnectionPage" className="cAll">
        <form onSubmit={handleRegistration} className="cForm">
          <h1 className="cTitre">Connexion</h1>
          <div className="cChampRenseignements">
            <input type="email" placeholder="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required />
            <FaEnvelope className="cIconnes"/>
          </div>
          <div className="cChampRenseignements">
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <FaLock className="cIconnes"/>
          </div>
          <button type = "submit" className="connection">
            <div className="connexion">
              <p>Je me connecte</p>
            </div>
          </button>
          <Link to="/inscription">
            <div className="inscription">
              Nouveau sur la plateforme ? C'est par ici !
            </div>
          </Link>
        </form>
      </div>
    </body>
);
}
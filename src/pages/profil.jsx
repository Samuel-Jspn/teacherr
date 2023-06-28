import React, { useState } from "react";
import "../styles/profil/profil.css";
import { Link } from "react-router-dom";
import anonymous from "./assets/anonymous.jpg";
import user1 from "./assets/user1.png";
import Navbar from "./components/navbar/navbar.jsx";
import History from "./components/history/history.jsx";
import Footer from "./components/footer/footer.jsx";
import axios from "axios";

export default function Profil() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleDelete = () => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?');
  
    if (confirmed) {
      // Envoyer la requête DELETE
      const token = localStorage.getItem('token');
      axios.post('http://localhost:3000/modif/delete/:userId')
        .then(response => {
          // Gérer la réponse de succès
        })
        .catch(error => {
          // Gérer l'erreur
        });
    } else {
      // Annuler la suppression
    }
  };
const user = [
  {
    firstName: "Gérard",
    lastName: "Bertrand",
    email: "blabla@orange.fr",
    password: "blabla",
    image: { anonymous },
  },
];
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  // const [passwordShown, setPasswordShown] = useState(false);
  return (
    <body id="profile">
      <div>
        <Navbar />
      </div>
      <section className="profile-infos">
      <form name = 'formo' onSubmit={handleDelete} className="cForme" >
        <h1>Profil Utilisateur</h1>
        <div className="profile-component">
          <div>
            <div className="profile-images">
              <img className="profile-picture" src={user1} />
            </div>
          </div>
          <h1>Gérard BERTRAND</h1>
          <div className="email">
            <h1>Adresse Mail</h1>
            <p>blabla@orange.fr</p>
          </div>
          <div className="password">
            <h1>Mot de Passe</h1>
            <input type="password" className="psw" value={password} />
          </div>
          <div className="titlePersonne">
            <h2>Professeur de maths</h2>                
          </div>
          <div className="levelPersonne">
            <h2>Bac +2</h2>
          </div>
          <div className="decrptionPersonne">
            <p>Un professeur de mathématiques est un enseignant spécialisé dans l'enseignement des concepts mathématiques aux élèves de différents niveaux scolaires. Leur rôle principal est de transmettre les connaissances mathématiques de manière claire et compréhensible, en aidant les élèves à développer une compréhension approfondie des concepts et des compétences mathématiques.</p>
          </div>
          <div className="profile-buttons">
            <button class="edit-btn">Éditer</button>
            <button type = "btnsubmit" onClick={handleDelete} class="delete-btn">Supprimer</button>
          </div>
          {/* Ajouter div 2 boutons éditer et supprimer */}
        </div>
      </form>
      </section>
      <section className="profile-history">
        <h1>Historique</h1>
        <h2>Rendez-vous à venir</h2>
        <div className="history">
          <div>
            <History
              title="Professeur en Français"
              level="Bac +5"
              description="Figures de style-han"
              date="21/06/2023 10h30"
            />
            <History
              title="Professeur en Anglais"
              level="Master"
              description="In English please."
              date="25/06/2023 13h30"
            />
          </div>
          <div>
            <h2>Rendez-vous passés</h2>
            <History
              title="Professeur en Maths"
              level="Bac +5"
              description="4x4 = 4"
              date="23/06/2023 9h00"
            />
          </div>
        </div>
      </section>
    </body>
  );
}
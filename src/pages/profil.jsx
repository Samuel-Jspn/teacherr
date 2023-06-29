import React, { useState } from "react";
import "../styles/profil/profil.css";
import { Link } from "react-router-dom";
import anonymous from "./assets/anonymous.jpg";
import user1 from "./assets/user1.png";
import Navbar from "./components/navbar/navbar.jsx";
import History from "./components/history/history.jsx";
import Footer from "./components/footer/footer.jsx";
import axios from "axios";
const email = localStorage.getItem('Full_email');
export default function Profil() {
// Gestionnaire d'événements de suppression
const handleDeleteAccount = (e) => {
  e.preventDefault();
  // Récupérer l'adresse e-mail de l'utilisateur depuis le local storage
  const email = localStorage.getItem('Full_email');
  // Vérifier si l'adresse e-mail est présente
  if (email) {
    // Effectuer une requête DELETE vers votre backend
    axios
      .delete('http://localhost:3000/modif/delete', { data: { email } })
      .then(response => {
        // Suppression réussie
        window.alert('Compte supprimé avec succès');
        console.log(response.data);
        // Effacer les informations d'identification de l'utilisateur du local storage
        localStorage.removeItem('Full_email');

      })
      .catch(error => {
        // Erreur lors de la suppression du compte
        console.error('Erreur lors de la suppression du compte', error);
        window.alert(error);
      });
  } else {
    console.error("Adresse e-mail de l'utilisateur introuvable dans le local storage");
  }
};
const user = [
  {
    firstName: "Gérard",
    lastName: "Bertrand",
    email,
    password: "MotdepasseTest123",
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
        <h1>Profil Utilisateur</h1>
        <div className="profile-component">
        <form onSubmit={handleDeleteAccount} className="cForm">
          <div>
            <div className="profile-images">
              <img className="profile-picture" src={user1} />
            </div>
          </div>
          <h1>Gérard BERTRAND</h1>
          <div className="email">
            <h1>Adresse Mail</h1>
            <p>feur.feur@feur.fr</p>
          </div>
          <div className="password">
            <h1>Mot de Passe</h1>
            <input type="password" className="psw" /*value={password}*/ />
          </div>
          <div className="titlePersonne">
            <h2>Professeur de maths</h2>
          </div>
          <div className="levelPersonne">
            <h2>Bac +2</h2>
          </div>
          <div className="decrptionPersonne">
            <p>
              Un professeur de mathématiques est un enseignant spécialisé dans
              l'enseignement des concepts mathématiques aux élèves de différents
              niveaux scolaires. Leur rôle principal est de transmettre les
              connaissances mathématiques de manière claire et compréhensible,
              en aidant les élèves à développer une compréhension approfondie
              des concepts et des compétences mathématiques.
            </p>
          </div>
          <div className="profile-buttons">
            <Link class="edit-link" to="../editprofil">
            <button class="edit-btn">Éditer</button>
            </Link>
            <button type = "submit" class="delete-btn">Supprimer</button>
          </div>
          {/* Ajouter div 2 boutons éditer et supprimer */}
        </form>
        </div>
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

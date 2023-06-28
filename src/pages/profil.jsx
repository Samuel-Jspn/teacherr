import React, { useState } from "react";
import "../styles/profil/profil.css";
import { Link } from "react-router-dom";
import anonymous from "./assets/anonymous.jpg";
import user1 from "./assets/user1.png";
import Navbar from "./components/navbar/navbar.jsx";
import History from "./components/history/history.jsx";

const password = "MotdepasseTest123";

const user = [
  {
    firstName: "Gérard",
    lastName: "Bertrand",
    email: "feur.feur@feur.fr",
    password: "MotdepasseTest123",
    image: { anonymous },
  },
];

function Profil() {
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  // const [passwordShown, setPasswordShown] = useState(false);

  const [text, setText] = useState("Texte statique du profil");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Effectuez ici les actions nécessaires pour enregistrer le texte modifié
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <body id="profile">
      <div>
        <Navbar />
      </div>
      <section className="profile-infos">
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
            <p>feur.feur@feur.fr</p>
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
          <div>
            {isEditing ? (
              <div>
                <textarea rows="10" col="10" className="descriptionPersonne" type="text" value={text} onChange={handleChange} />
                <div className="profile-buttons">
                  <button class="edit-btn" onClick={handleSaveClick}>Enregistrer</button>
                </div>
              </div>
            ) : (
              <div>
                <p className="descriptionPersonne">{text}</p>
                <div className="profile-buttons">
                  <button class="edit-btn" onClick={handleEditClick}>Éditer</button>
                  <button class="delete-btn">Supprimer</button>
                </div>
              </div>
            )}
          </div>
          {/* Ajouter div 2 boutons éditer et supprimer */}
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

export default Profil;

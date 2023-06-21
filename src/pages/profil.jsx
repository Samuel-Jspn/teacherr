import React, { useState } from "react";
import "../styles/profil/profil.css";
import { Link } from "react-router-dom";
import anonymous from "./assets/anonymous.jpg";
import Navbar from "./components/navbar/navbar.jsx";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";

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

function home() {
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
          <div>
            <div className="profile-images">
              <img className="profile-picture" src={anonymous} />
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
            {/* <input type={passwordShown ? "text" : "password"} /> */}
            {/* <button onClick={togglePassword}>{BsEye}</button> */}
            <div className="profile-buttons">
              <button class="edit-btn">Éditer</button>
              <button class="delete-btn">Supprimer</button>
            </div>
            {/* Ajouter div 2 boutons éditer et supprimer */}
          </div>
        </div>
      </section>
    </body>
  );
}

export default home;

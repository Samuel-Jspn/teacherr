import { Link } from "react-router-dom";
import "../styles/inscription/inscription.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineGesture } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

import axios from "axios";
import React, { useState } from "react";

export default function InscriptionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [status, setStatus] = useState(true);

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Envoie des données d'enregistrement au backend
    axios
      .post("http://localhost:3000/auth/register", {
        email,
        password,
        nom,
        prenom,
        status,
      })
      .then((response) => {
        window.alert("Compte créé avec succès");
        // Traitement de la réponse du backend (si nécessaire)
        console.log(response.data);
      })
      .catch((error) => {
        // Traitement de l'erreur en cas d'échec
        window.alert("Une erreur est survenue");
        console.error(error);
      });
  };

  const items = [
    {
      id: 1,
      value: "Tuteur",
    },
    {
      id: 2,
      value: "Etudiant",
    },
  ];

  return (
    <body>
      <div className="iAll">
        <div className="zoom">
          <form
            onSubmit={handleRegistration}
            action=""
            method="post"
            className="iForm"
          >
            <h1 className="titre">Inscription</h1>
            <div className="name">
              <div className="ChampNom">
                <input
                  type=""
                  placeholder="Nom"
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
                <MdOutlineGesture className="iIconne" />
              </div>
              <div className="ChampNom">
                <input
                  type=""
                  placeholder="Prénom"
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
                <MdOutlineGesture className="iIconne" />
              </div>
            </div>
            <div className="iDropdown">
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                  onChange={(e) => setStatus(e.target.value === "true")}
                />
                <label className="for-dropdown" htmlFor="dropdown">
                  Choisissez votre statut
                </label>
                <div className="section-dropdown">
                  <a className="dropdown-options" href="#">
                    Tuteur <MdSchool />
                  </a>
                  <a className="dropdown-options" href="#">
                    Etudiant <BsFillPersonFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="iChampRenseignemants">
              <input
                type="email"
                placeholder="Adresse email"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
              <FaEnvelope className="iIconnes" />
            </div>
            <div className="iChampRenseignemants">
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="iIconnes" />
            </div>
            <div className="iChampRenseignemants">
              <input type="password" placeholder="Vérification mot de passe" />
              <FaLock className="iIconnes" />
            </div>
            <button type="submit" className="create">
              <p>Je crée mon compte</p>
            </button>
            <Link to="/auth/login">
              <div className="registration">
                Déjà membre de la plateforme ? C'est par ici !
              </div>
            </Link>
          </form>
        </div>
      </div>
    </body>
  );
}

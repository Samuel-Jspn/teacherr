import React from "react";
import { Link } from "react-router-dom";
import "../styles/inscription/inscription.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineGesture } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

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

function inscriptionPage() {
  return (
    <body>
      <div className="all">
        <div className="zoom">
          <form action="" method="post" className="">
            <h1 className="titre">Inscription</h1>
            <div className="name">
              <div className="ChampNom">
                <input type="" placeholder="Nom" />
                <MdOutlineGesture className="iconne" />
              </div>
              <div className="ChampNom">
                <input type="" placeholder="Prénom" />
                <MdOutlineGesture className="iconne" />
              </div>
            </div>
            <div>
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label className="for-dropdown" htmlFor="dropdown">
                  Choisissez votre statut
                </label>
                <div className="section-dropdown">
                  <a href="#">
                    Tuteur <MdSchool />
                  </a>
                  <a href="#">
                    Etudiant <BsFillPersonFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="iChampRenseignemants">
              <input type="email" placeholder="Adresse email" />
              <FaEnvelope className="iconnes" />
            </div>
            <div className="iChampRenseignemants">
              <input type="password" placeholder="Mot de passe" />
              <FaLock className="iconnes" />
            </div>
            <div className="iChampRenseignemants">
              <input type="password" placeholder="Vérification mot de passe" />
              <FaLock className="iconnes" />
            </div>
            <button className="create">
              <p>Je crée mon compte</p>
            </button>
            <Link to="/connection">
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

export default inscriptionPage;

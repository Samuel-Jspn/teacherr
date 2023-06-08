import React from "react";
import { Link } from "react-router-dom";
import "../styles/inscription/inscription.css";

function inscriptionPage() {
  return (
    <body>
      <div className="all">
        <div className="zoom">
          <form action="" method="post" className="">
            <h1 className="iTitre">Inscription</h1>
            <div className="name">
              <div className="ChampNom">
                <input type="" placeholder="Nom" />
                <i className="bx bx-pulse"></i>
              </div>
              <div className="ChampNom">
                <input type="" placeholder="Prénom" />
                <i className="bx bx-pulse"></i>
              </div>
            </div>
            <div className="iChampRenseignements">
              <input type="email" placeholder="Adresse email" />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="iChampRenseignements">
              <input type="password" placeholder="Mot de passe" />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="iChampRenseignements">
              <input type="password" placeholder="Vérification mot de passe" />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button className="create">
              <div className="creation">
                <p>Je crée mon compte</p>
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </button>
            <Link to="/connection">
              <div className="toConnection">
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

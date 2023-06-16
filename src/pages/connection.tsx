import React from "react";
import { Link } from "react-router-dom";
import "../styles/connection/connection.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function connectionPage() {
  return (
    <body>
      <div className="cAll">
        <form action="" method="post" className="cForm">
          <h1 className="cTitre">Connexion</h1>
          <div className="cChampRenseignements">
            <input type="email" placeholder="Adresse email" />
            <FaEnvelope className="iconnes"/>
          </div>
          <div className="cChampRenseignements">
            <input type="password" placeholder="Mot de passe" />
            <FaLock className="iconnes"/>
          </div>
          <button className="connection">
            <div className="connexion">
              <p>Je me connecte</p>
              <FaArrowRight className="iconnes"/>
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

export default connectionPage;

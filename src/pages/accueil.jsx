import React from "react";
import "../styles/accueil/accueil.css";
import { Link } from "react-router-dom";
// import teacherr from "../../assets/teacherr.png";
import teacherr from "./assets/teacherr.png";
import teacherrLogo from "./assets/teacherrLogo.png";

function home() {
  return (
    <body>
      <div className="preview">
        <img className="preview-logo" src={teacherrLogo} />
        <img src={teacherr} />
        <div className="titles">
          <h1>Bienvenue sur Teacherr</h1>
          <h2>Une application de réservation de cours de tutorat</h2>
        </div>
        <div className="lien-btn">
          <Link to="/connection">
            <button href="/connection">
              <p>Connexion</p>
            </button>
          </Link>
          <Link to="/inscription">
            <button>
              <p>Inscription</p>
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default home;

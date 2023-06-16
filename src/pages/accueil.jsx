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
        <img className="preview-icon" src={teacherrLogo} />
        <img className="preview-logo" src={teacherr} />
        <div className="titles">
          <h1>Bienvenue sur Teacherr</h1>
          <h2>Une application de réservation de cours de tutorat</h2>
        </div>
        <div className="lien-btn">
          <Link to="/connection">
            <button className="redirections">
              <p>Connexion</p>
            </button>
          </Link>
          <Link to="/inscription">
            <button className="redirections">
              <p>Inscription</p>
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default home;

import { Link } from "react-router-dom";
import "../styles/editprofil/editprofil.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineGesture } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import react from "react";
import Navbar from "./components/navbar/navbar.jsx";

function Editprofil() {
  return (
    <body>
      <Navbar />
      <div className='eAll'>
        <form className="eForm">
        <h1 className="eTitre">Profil</h1>
        <div className="name">
              <div className="ChampNom">
                <input
                  type=""
                  placeholder="Nom"
                />
                <MdOutlineGesture className="iIconne" />
              </div>
              <div className="ChampNom">
                <input
                  type=""
                  placeholder="Prénom"
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
                />
                <label className="for-dropdown" htmlFor="dropdown">
                  Votre statut
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
          <div className="eChampRenseignements">
            <input
              type=""
              placeholder="Niveau"
            />
            <BiBookBookmark className="eIconnes" />
          </div>
          <div className="eChampRenseignements">
            <input
              type=""
              placeholder="Description"
            />
            <BsReverseLayoutTextSidebarReverse className="eIconnes" />
          </div>
          <div className="eChampRenseignements">
            <input
              type="email"
              placeholder="Adresse email"
            />
            <FaEnvelope className="eIconnes" />
          </div>
          <div className="eChampRenseignements">
            <input
              type="password"
              placeholder="Mot de passe"
            />
            <FaLock className="eIconnes" />
          </div>
          <button type="submit" className="create">
              <p>Modifier mon compte</p>
            </button>
        </form>
      </div>
    </body>
  );
}

export default Editprofil;
import React from "react";
import "./navbar.css";
import teacherr from "../../assets/teacherr.png";
import teacherrLogo from "../../assets/teacherrLogo.png";
import anonymous from "../../assets/anonymous.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
        <a href="./home">
          <img className="navbar-image" src={teacherrLogo} />
        </a>
      </div>
      <div className="navbar-right">
        <a href="./profil">
          <img className="profile-picture" src={anonymous} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

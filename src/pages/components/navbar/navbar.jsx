import React from "react";
import "./navbar.css";
import teacherr from "../../assets/teacherr.png";
import teacherrLogo from "../../assets/teacherrLogo.png";
import anonymous from "../../assets/anonymous.jpg";
import user1 from "../../assets/user1.png";

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
          <img className="profile-picture" src={user1} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

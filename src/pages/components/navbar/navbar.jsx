import React from "react";
import "./navbar.css";
import teacherr from "../../assets/teacherr.png";
import teacherrLogo from "../../assets/teacherrLogo.png";
import anonymous from "../../assets/anonymous.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
        <img className="navbar-image" src={teacherrLogo} />
      </div>
      <div className="navbar-right">
        <img className="profile-picture" src={anonymous} />
      </div>
    </div>
  );
};

export default Navbar;

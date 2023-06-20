import React, { useState } from "react";
import "../styles/profil/profil.css";
import { Link } from "react-router-dom";
import anonymous from "./assets/anonymous.jpg";
import Navbar from "./components/navbar/navbar.jsx";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const user = [
  {
    firstName: "Gérard",
    lastName: "Bertrand",
    email: "feur.feur@feur.fr",
    password: "MotdepasseTest123",
    image: { anonymous },
  },
];

function home() {
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  // const [passwordShown, setPasswordShown] = useState(false);
  return (
    <body id="profile">
      <div>
        <Navbar />
      </div>
      <section className="profile-infos">
        <h1>Profile Utilisateur</h1>
        <div className="profile-component">
          <img className="profile-img" src={anonymous} />
          <h1>Gérard BERTRAND</h1>
          <div className="email">
            <h1>Adresse Mail</h1>
            <p>feur.feur@feur.fr</p>
          </div>
          <div className="password">
            {/* <input type={passwordShown ? "text" : "password"} /> */}
            {/* <button onClick={togglePassword}>{BsEye}</button> */}
          </div>
        </div>
      </section>
    </body>
  );
}

export default home;

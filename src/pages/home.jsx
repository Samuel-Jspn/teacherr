import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import "../styles/home/home.css";
import Teacher from "./components/teacher/teacher.jsx";

function home() {
  return (
    <body>
      <div><Navbar /></div>
      <div class="contenu_recherche">
      <Teacher title="Professeur de maths" level="Bac +2" description="Test" />
      <Teacher title="Professeur de maths" level="Bac +2" description="Test" />
      <Teacher title="Professeur de maths" level="Bac +2" description="Test" />
      <Teacher title="Professeur de maths" level="Bac +2" description="Test" />
      <Teacher title="Professeur de maths" level="Bac +2" description="Test" />
      </div>
    </body>
  );
}

export default home;

import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import "../styles/home/home.css";
import Teacher from "./components/teacher/teacher.jsx";
import Student from "./components/student/student.jsx";
import prof1 from "./assets/prof1.jpg";
import prof2 from "./assets/prof2.png";
import prof3 from "./assets/prof3.jpg";
import prof4 from "./assets/prof4.png";
import prof5 from "./assets/prof5.jpg";

function home() {
  return (
    <>
      <div className="home-div">
        <Navbar />
      </div>
      <section className="conteneur_annonces">
        <Teacher
          title="Professeur de maths"
          level="Bac +2"
          description="Un professeur de mathématiques est un enseignant spécialisé dans l'enseignement des concepts mathématiques aux élèves de différents niveaux scolaires. Leur rôle principal est de transmettre les connaissances mathématiques de manière claire et compréhensible, en aidant les élèves à développer une compréhension approfondie des concepts et des compétences mathématiques."
          picture={prof1}
        />
        <Teacher
          title="Professeur de français"
          level="Bac +5"
          description="Test"
          picture={prof2}
        />
        <Teacher
          title="Professeur de SVT"
          level="Doctorat"
          description="Test"
          picture={prof3}
        />
        <Teacher
          title="Professeur de chimie"
          level="Bac +2"
          description="Test"
          picture={prof4}
        />
        <Teacher
          title="Professeur d'anglais"
          level="Bac +3"
          description="Test"
          picture={prof5}
        />
        <Student title="Elève d'anglais" level="Bac +3" description="Test" />
      </section>
    </>
  );
}

export default home;

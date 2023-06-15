import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import "../styles/home/home.css";
import Teacher from "./components/teacher/teacher.jsx";

function home() {
  return (
    <>
      <div><Navbar /></div>
      <section className="conteneur_annonces">
      <Teacher title="Professeur de maths" level="Bac +2" description="Un professeur de mathématiques est un enseignant spécialisé dans l'enseignement des concepts mathématiques aux élèves de différents niveaux scolaires. Leur rôle principal est de transmettre les connaissances mathématiques de manière claire et compréhensible, en aidant les élèves à développer une compréhension approfondie des concepts et des compétences mathématiques." />
      <Teacher title="Professeur de français" level="Bac +5" description="Test" />
      <Teacher title="Professeur de SVT" level="Doctorat" description="Test" />
      <Teacher title="Professeur de chimie" level="Bac +2" description="Test" />
      <Teacher title="Professeur d'anglais" level="Bac +3" description="Test" />
      </section>
    </>
  );
}

export default home;

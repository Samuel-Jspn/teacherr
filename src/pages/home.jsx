import react from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import "../styles/home/home.css";
import Teacher from "./components/teacher/teacher.jsx";
import Student from "./components/student/student.jsx";

function home() {
  return (
    <>
      <div className="home-div">
        <Navbar />
      </div>
      <section className="conteneur_annonces">
        <Teacher />
        <Student title="Elève d'anglais" level="Bac +3" description="Test" />
      </section>

      <Footer />
    </>
  );
}

export default home;

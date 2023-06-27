import react from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import "../styles/home/home.css";
import Teacher from "./components/teacher/teacher.jsx";
import Student from "./components/student/student.jsx";
import RatingForm from './components/Note/note.jsx';
import Calendar from './components/Calendar/Calendar.jsx';
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
      <Teacher/>
      <Student title="Elève d'anglais" level="Bac +3" description="Test" />
      </section>

      <Calendar />
      <RatingForm />

      <Footer />
    </>
  );
}

export default home;

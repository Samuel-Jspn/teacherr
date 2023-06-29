import react from "react";
import Calendar from "./components/Calendar/Calendar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import RatingForm from "./components/Note/note.jsx";
import "../styles/display/display.css";


function Display() {
  return (
    <>
      <div className="home-div">
        <Navbar />
      </div>
      <div className="preview-components">
        <Calendar />
        <RatingForm />
      </div>
    </>
  );
}

export default Display;

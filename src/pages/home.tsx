import React from "react";
import Title from "./components/title/title.jsx";
import "../styles/home/home.css";
import teacherrLogo from "./assets/teacherrLogo.png";

function home() {
  return (
    <body>
      {/* <Title /> */}
      <img src={teacherrLogo} />
      <h1>Teacherr</h1>
    </body>
  );
}

export default home;

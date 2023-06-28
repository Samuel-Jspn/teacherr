import React, { useState, useEffect } from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";
import Popups from "../Popup/Popups.jsx";
import axios from "axios";

const Teacher = ({ title, level, description }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/mongoDataTeacher")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="Tconteneur" key={item._id}>
          <form action="" method="post" className="teacherForm">
            <div id="entete">
              <img className="Tprofile-picture" src={item.image} />
              <script>console.log(item.image)</script>
              <h1 className="title_teacher">Professeur en {item.subject}</h1>
            </div>
            <div className="Tblock">
              <div className="Tinfos">
                <div>{item.level}</div>
                <p className="Tinfo-description">{item.description}</p>
              </div>
              <div className="Tbutton-container">
                <button className="Tbutton">
                  <Popups />
                </button>
              </div>
            </div>
          </form>
        </div>
      ))}
    </>
  );
};

export default Teacher;

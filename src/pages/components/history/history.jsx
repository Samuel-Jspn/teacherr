import React from "react";
import "./history.css";
import PopupsContact from "../Popup/PopupsContact.jsx";

const History = ({ title, level, description, date }) => {
  return (
    <div className="div-history">
      <form action="" method="post" className="historyForm">
        <div id="h-titles">
          <h1 className="course-name">{title}</h1>
        </div>
        <div className="history-informations">
          <div className="infos">
            <div>{level}</div>
            <p className="info-description">{description}</p>
            <p className="info-description">Date : {date}</p>
          </div>
          <div className="h-button-container">
            <button className="h-button-access">
              <PopupsContact />
            </button>
            <button className="h-button-delete">Supprimer</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default History;

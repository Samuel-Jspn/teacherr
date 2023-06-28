import React, { useState } from "react";
import Popup from "./Popup";
import "./popupsContact.css";
import RatingForm from "../Note/note.jsx";

const PopupsContact = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button className="btn-popup-contact" onClick={handleOpenPopup}>
        Accéder
      </button>
      {isPopupOpen && (
        <Popup onClose={handleClosePopup}>
          <RatingForm />
        </Popup>
      )}
    </div>
  );
};

export default PopupsContact;

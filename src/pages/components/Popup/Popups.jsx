import React, { useState } from 'react';
import Popup from './Popup';
import Calendar from "../Calendar/Calendar.jsx";
import "./popup.css";

const Popups = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button className='btn-popup' onClick={handleOpenPopup}>Prendre rdv</button>
      {isPopupOpen && (
        <Popup onClose={handleClosePopup}>
          <Calendar />
        </Popup>
      )}
    </div>
  );
};

export default Popups;
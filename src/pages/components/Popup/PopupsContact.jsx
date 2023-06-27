import React, { useState } from 'react';
import Popup from './Popup';
import "./popup.css";

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
      <button className='btn-popup' onClick={handleOpenPopup}>Prendre rdv</button>
      {isPopupOpen && (
        <Popup onClose={handleClosePopup}>
          tu met ce que tu veux dans la popup ici
        </Popup>
      )}
    </div>
  );
};

export default PopupsContact;
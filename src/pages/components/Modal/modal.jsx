import React, { useState } from "react";
import "./modal.css";
import { GrClose } from "react-icons/gr";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Contact
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Contact</h2>
            </div>
            <h3>Mail Devs</h3>
            <p>samuel.josephine@viacesi.fr</p>
            <p>baptiste.cassette@viacesi.fr</p>
            <p>mathilde.lepers@viacesi.fr</p>
            <p>louis.delattre@viacesi.fr</p>

            <button className="close-modal" onClick={toggleModal}>
              <GrClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

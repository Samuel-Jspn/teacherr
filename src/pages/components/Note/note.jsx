import React, { useState } from "react";
import "./note.css";
import Happy from "../../assets/happy_smiley.png";
import Neutral from "../../assets/neutral_smiley.png";
import Unhappy from "../../assets/unhappy_smiley.png";

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer ici l'action souhaitée avec la note (rating) et le commentaire (comment)
    console.log("Note:", rating);
    console.log("Commentaire:", comment);
    // Réinitialiser les valeurs du formulaire
    setRating(0);
    setComment("");
  };

  return (
    <div className="note">
      <form onSubmit={handleSubmit} className="nForm">
        <h2 className="nTitre">Formulaire de notation</h2>
        <div>
          <h1 className="title_note">Choisissez une note :</h1>
          <div className="emojis">
            <img
              src={Happy}
              onClick={() => handleRatingClick(1)}
              className="notation_emoji"
            />
            <img
              src={Neutral}
              onClick={() => handleRatingClick(2)}
              className="notation_emoji"
            />
            <img
              src={Unhappy}
              onClick={() => handleRatingClick(3)}
              className="notation_emoji"
            />
          </div>
        </div>
        <div className="comment">
          <h1 className="title_note">Ajoutez un commentaire :</h1>
          <textarea
            className="com"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button className="btn-note" type="submit">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default RatingForm;

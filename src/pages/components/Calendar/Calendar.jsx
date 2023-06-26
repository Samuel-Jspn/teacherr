import React, { useState } from 'react';

const Calendar = () => {
  // Utilisation du hook useState pour gérer l'état de la date et de la date sélectionnée
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Fonction pour obtenir le nom du mois à partir de la date
  const getMonthName = (date) => {
    const options = { month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  };

  // Fonction pour obtenir les jours de la semaine
  const getWeekDays = () => {
    const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    // Utilisation de map pour créer un élément <th> pour chaque jour de la semaine
    return weekDays.map((day) => <th key={day}>{day}</th>);
  };

  // Fonction pour générer les jours du calendrier
  const getCalendarDays = () => {
    const currentMonth = date.getMonth();
    const daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(date.getFullYear(), currentMonth, 1).getDay();

    const calendarDays = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
          // Ajout d'une cellule vide si le jour ne fait pas partie du mois en cours
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          const currentDate = new Date(date.getFullYear(), currentMonth, dayCounter);
          const isCurrentDateSelected = selectedDate && currentDate.toDateString() === selectedDate.toDateString();
          const dayClassName = isCurrentDateSelected ? 'selected' : '';
          week.push(
            // Ajout d'une cellule pour le jour du mois, avec une classe "selected" si c'est la date sélectionnée
            <td
              key={`${i}-${j}`}
              className={dayClassName}
              onClick={() => handleDateClick(currentDate)}
            >
              {dayCounter}
            </td>
          );
          dayCounter++;
        }
      }
      // Ajout de la semaine dans le tableau des jours du calendrier
      calendarDays.push(<tr key={i}>{week}</tr>);
    }

    return calendarDays;
  };

  // Fonction pour gérer le mois précédent
  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // Fonction pour gérer le mois suivant
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // Fonction pour gérer le clic sur une date
  const handleDateClick = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className="calendar">
      <div className="header">
        {/* Bouton pour passer au mois précédent */}
        <button onClick={handlePreviousMonth}>&lt;</button>
        {/* Affichage du nom du mois */}
        <h2>{getMonthName(date)}</h2>
        {/* Bouton pour passer au mois suivant */}
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      {/* Tableau pour afficher les jours du calendrier */}
      <table>
        <thead>
          <tr>{getWeekDays()}</tr>
        </thead>
        <tbody>{getCalendarDays()}</tbody>
      </table>
      {/* Affichage de la date sélectionnée */}
      <div className="selected-date">
        <p>
          Date sélectionnée : {selectedDate ? selectedDate.toLocaleDateString('fr-FR') : 'Aucune date sélectionnée'}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
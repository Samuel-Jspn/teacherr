import React, { useState } from 'react';
import "./Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const getMonthName = (date) => {
    const options = { month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const getWeekDays = () => {
    const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    return weekDays.map((day) => <th key={day}>{day}</th>);
  };

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
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          const currentDate = new Date(date.getFullYear(), currentMonth, dayCounter);
          const isCurrentDateSelected =
            selectedDate && currentDate.toDateString() === selectedDate.toDateString();
          const dayClassName = isCurrentDateSelected ? 'selected' : '';
          week.push(
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
      calendarDays.push(<tr key={i}>{week}</tr>);
    }

    return calendarDays;
  };

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handleDateClick = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button className='btn-fleche' onClick={handlePreviousMonth}>&lt;</button>
        <h2 className='mois'>{getMonthName(date)}</h2>
        <button className='btn-fleche' onClick={handleNextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>{getWeekDays()}</tr>
        </thead>
        <tbody>{getCalendarDays()}</tbody>
      </table>
      <div className="selected-hour">
        <p className="header">Choisir une heure :</p>
        <input className='heure' type="time" value={selectedTime} onChange={handleTimeChange} />
      </div>
      <div className="selected-date">
        <p className="header">Date sélectionnée : {selectedDate ? selectedDate.toLocaleDateString('fr-FR') : ''}</p>
        <p className="header">Heure sélectionnée : {selectedTime}</p>
      </div>
    </div>
  );
};

export default Calendar;
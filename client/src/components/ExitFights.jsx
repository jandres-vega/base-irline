import React from 'react';
import iconCalendar from '../assets/icons/calendar.svg';
import '../styles/ExitFights.css';
const ExitFights = () => {
    return (
        <div className="exit-fights">
            <img src={iconCalendar} alt="icon-calendar"/>
            <span>Salida</span>
            <span>Mar, 30 nov, 2022</span>
        </div>
    );
};

export default ExitFights;
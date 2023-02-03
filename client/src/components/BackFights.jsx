import React from 'react';
import iconCalendar from '../assets/icons/calendar.svg';
import '../styles/BackFights.css';
const ExitFights = () => {
    return (
        <div className="back-fights">
            <img src={iconCalendar} alt="icon-calendar"/>
            <span>Regreso</span>
            <span>Mar, 30 nov, 2022</span>
        </div>
    );
};

export default ExitFights;
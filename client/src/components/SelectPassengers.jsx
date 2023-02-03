import React from 'react';
import '../styles/SelectPassengers.css';
const SelectPassengers = () => {
    return (
        <div className="container-select-passengers">
            <select className="select-passengers" >
                <option>Pasajeros</option>
                <option>1 Adulto</option>
            </select>
        </div>
    );
};

export default SelectPassengers;
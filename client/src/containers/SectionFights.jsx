import React from 'react';
import '../styles/SectionFights.css';
import FilterByTrip from "../components/FilterByTrip";
import OriginCity from "../components/OriginCity";
const SectionFights = () => {
    return (
        <section className="section-fights">
            <div>
                <h2>Busca un nuevo destino y comienza la aventura.</h2>
                <p>Descubre vuelos al mejor precio y perfecto para cualquier viaje.</p>
            </div>
            <FilterByTrip />
            <OriginCity />
        </section>
    );
};

export default SectionFights;
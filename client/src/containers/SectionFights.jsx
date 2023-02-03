import React from 'react';
import '../styles/SectionFights.css';
import FilterByTrip from "../components/FilterByTrip";
import OriginCity from "../components/OriginCity";
import SelectDestination from "../components/SelectDestination";
import ExitFights from "../components/ExitFights";
import BackFights from "../components/BackFights";
import SelectPassengers from "../components/SelectPassengers";
import SectionPromotion from "../components/SectionPromotion";
const SectionFights = () => {
    return (
        <section className="section-fights">
            <div>
                <h2>Busca un nuevo destino y comienza la aventura.</h2>
                <p>Descubre vuelos al mejor precio y perfecto para cualquier viaje.</p>
            </div>
            <FilterByTrip />
            <div className="section-origin-and-destination">
                <OriginCity />
                <SelectDestination />
            </div>
            <div className="section-origin-and-destination">
                <ExitFights />
                <BackFights />
            </div>
            <div className="section-promotion-passengers">
                <SelectPassengers />
                <SectionPromotion />
            </div>
        </section>
    );
};

export default SectionFights;
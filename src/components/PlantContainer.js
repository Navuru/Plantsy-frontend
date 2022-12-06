import React from 'react';
import PlantCard from './PlantCard';

function PlantContainer({plants}) {
    const plantCards = plants.map((toy) => (
        <PlantCard
        key={plant.id}
        plant={plant}
        />
    )); 

    return(
        <div id = "plant-collection">{plantCards}</div>
    )
}

export default PlantContainer;
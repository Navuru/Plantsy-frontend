import React from 'react';
import PlantCard from './PlantCard';
import "../home/Home.css"

function PlantContainer({plants,onDeletePlant,onUpdatePlant }) {
    const plantCards = plants?.map((plant) => (
        <PlantCard
        key={plant.id}
        plant={plant}
        image_url={ plant.image_url}
        description={ plant.description }
        onDeletePlant={onDeletePlant}
        onUpdatePlant={onUpdatePlant}
        />
    )); 

    return <div id = "grid-container">{plantCards}</div>;
}

export default PlantContainer;
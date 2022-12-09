import React from 'react';
import "../home/Home.css"

function PlantCard ({plant, onDeletePlant, onUpdatePlant}) {
    const { id, name, image_url, description, likes} = plant;
    

    function handleDeleteClick() {
        fetch (`https://plantsy-production-7d90.up.railway.app/plants/plants/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                onDeletePlant(plant);
            }
        });
    }

    function handleLikeClick() {
        const updateObject = {
            likes: plant.likes + 1,
        };

        fetch (`https://plantsy-production-7d90.up.railway.app/plants/plants/${id}`, {
            method: 'PATCH',
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObject),
        })
        .then((r) => r.json())
        .then((updatedPlant) => onUpdatePlant(updatedPlant));
    }
    return (
            <div className="card">
                <img src={image_url} alt={name} style={{width: "17rem", height:""}} /> 
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{likes} Likes </p>
                    <button className="like-btn" onClick={handleLikeClick}>Like</button>
                    <button className="del-btn" onClick={handleDeleteClick}>Delete</button>
                </div>
                
               
            </div>
    );
}
export default PlantCard;
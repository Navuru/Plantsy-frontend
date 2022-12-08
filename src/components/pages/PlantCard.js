import React from 'react';
import PlantForm from "./PlantForm";
import "../home/Home.css"

function PlantCard ({plant, onDeletePlant, onUpdatePlant}) {
    const { id, name, image_url, description, likes} = plant;
    

    function handleDeleteClick() {
        fetch (`/plants/${id}`, {
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

        fetch (`/plants/${id}`, {
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
        // <div id = "card"className="card" style={{width: "15rem"}}>
        // <img src={image_url} class="card-img-top" alt="..." style={{width: "15rem"}}/>
        // <div class="card-body">
        //     <h3 class="card-title">{name}</h3>
        //     <p class="card-text">{description}</p>
        //     <p>{likes} Likes</p>
        //     <button type="button" class="btn btn-success" onClick={handleLikeClick}>Like</button>
        //     <button className="del-btn" onClick={handleDeleteClick}>Delete</button>
        // </div>
        // </div>

            <div className="card">
                <img src={image_url} alt={name} className="toy-avatar"style={{width: "15rem"}} /> 
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
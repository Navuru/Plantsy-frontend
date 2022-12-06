import React from 'react';

function PlantCard () {

    return (
        <div class="card" style={{width: "15rem"}}>
        <img src="https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480__480.jpg" class="card-img-top" alt="..." style={{width: "15rem"}}/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p>Likes</p>
            <button type="button" class="btn btn-success">Like</button>
        </div>
        </div>
    );
}
export default PlantCard;
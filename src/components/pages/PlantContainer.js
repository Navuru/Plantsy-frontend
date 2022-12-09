import React from 'react';
import PlantCard from './PlantCard';
import "../home/Home.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function PlantContainer({plants,onDeletePlant,onUpdatePlant,search }) {
    const plantCards = plants.filter((item) => {
        return search.toLowerCase() === ""
          ? item : item.name.toLowerCase().includes(search.toLowerCase());
      }).map((plant) => (
        <PlantCard
        key={plant.id}
        plant={plant}
        image_url={ plant.image_url}
        description={ plant.description }
        onDeletePlant={onDeletePlant}
        onUpdatePlant={onUpdatePlant}
        />
    )); 

    return (
        <div id = "container">
        
            <div id = "columns">
                
                    <p><span class="material-symbols-rounded">format_quote</span>Add a new plant, add a new friend <span class="material-symbols-rounded">format_quote</span></p>
                
                <br></br> <br></br>

               
                    <p><span class="material-symbols-rounded">format_quote</span>Grow like a flower not a weed<span class="material-symbols-rounded">format_quote</span></p>
                <br></br> <br></br>

                
                    <p><span class="material-symbols-rounded">format_quote</span>Let some fresh air into your house <span class="material-symbols-rounded">format_quote</span></p>
                <br></br> <br></br>

                    <p><span class="material-symbols-rounded">format_quote</span>It's time to grow your dreams <span class="material-symbols-rounded">format_quote</span></p>
                    <br></br> <br></br>

                    <p><span class="material-symbols-rounded">format_quote</span>Clean and green are two words to live by <span class="material-symbols-rounded">format_quote</span></p>
                    <br></br> <br></br>
                    
                    <p><span class="material-symbols-rounded">format_quote</span>Gardening is a way to a healthy life<span class="material-symbols-rounded">format_quote</span></p>
                    <br></br> <br></br>

                    <p><span class="material-symbols-rounded">format_quote</span> Love the green<span class="material-symbols-rounded">format_quote</span></p>
                    <br></br> <br></br>
                    
                    <p><span class="material-symbols-rounded">format_quote</span>Grow your health, Grow a garden <span class="material-symbols-rounded">format_quote</span></p>
            </div>
            
            <div id = "grid-container">{plantCards}</div>
            
        </div>
    )
}

export default PlantContainer;
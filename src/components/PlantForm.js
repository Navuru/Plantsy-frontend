import React, {useState} from "react";

function PlantForm () {

    const [formData,setFormData] = useState({
        name: "",
        image: "",
        description: "",
    });

    return (
        <div className= "container">
            <form>
                <h3>Add a plant!</h3>
                <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter plant name..."
                />
                <br/> <br/>
                <input
                type="text"
                name="image"
                value={formData.image}
                placeholder="Enter plant's image url..."
                />
                 <br/> <br/>
                 <input
                type="text"
                name="description"
                value={formData.description}
                placeholder="Enter plant's description..."
                />
                <br/><br/>
                 <input
                type="submit"
                name="submit"
                value="Create New Plant"
                className="submit"
                    />
            </form>
        </div>
    )
}

export default PlantForm;
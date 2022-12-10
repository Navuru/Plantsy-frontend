import React, {useState} from "react";
import "../pages/login.css"

function PlantForm ({onAddPlant}) {

    const [formData,setFormData] = useState({
        name: "",
        image_url: "",
        description: "",
    });

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }

    function handleSubmit(e) {
        e.preventDefault();
        const newPlant = {
            ...formData,
            likes: 0,
        };
        fetch("plantsy-production-7d90.up.railway.app/plants/plants",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlant),
        })
        .then((r) => r.json())
        .then((newPlant) => {
            setFormData({
                name: "",
                image_url: "",
                description: "",
            });
            onAddPlant(newPlant);
        });
    }

    return (
        <div className= "container">
            <form onSubmit={handleSubmit}>
                <h3>Add a plant!</h3>
                <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter plant name..."
                onChange={handleChange}
                />
                <br/> <br/>
                <input
                type="text"
                name="image_url"
                value={formData.image_url}
                placeholder="Enter plant's image url..."
                onChange={handleChange}
                />
                 <br/> <br/>
                 <input
                type="text"
                name="description"
                value={formData.description}
                placeholder="Enter plant's description..."
                onChange={handleChange}
                />
                <br/><br/>
                 <input
                 id = "input"
                type="submit"
                name="submit"
                value="Create New Plant"
                className="submit"
                />
                    <br/><br/>
            </form>
        </div>
    )
}

export default PlantForm;
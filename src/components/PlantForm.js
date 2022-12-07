import React, {useState} from "react";

function PlantForm (onAddPlant) {

    const [formData,setFormData] = useState({
        name: "",
        image: "",
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
        fetch("/plants",{
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
                image: "",
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
                name="image"
                value={formData.image}
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
import React, {useState} from "react";

function PlantForm () {

    return (
//         <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Name of Plant</label>
//     <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
//   <div> <br></br></div>

//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Description</label>
//     <input type="description" class="form-control" id="exampleInputPassword1"/>
//   </div>

//   <div> <br></br></div>

//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

        <div className= "container">
            <form>
                <h3>Add a plant!</h3>
                <input
                type="text"
                name="name"
                // value={formData.name}
                placeholder="Enter plant name..."
                />
                <br></br>
                <input
                type="text"
                name="image"
                // value={formData.image}
                placeholder="Enter plant's image url..."
                />
                 <br/> <br/>
                 <input
                type="text"
                name="description"
                // value={formData.description}
                placeholder="Enter plant's description..."
                />
                <br/><br/>
                 <input
                type="submit"
                name="submit"
                value="Create New Toy"
                className="submit"
                    />
            </form>
        </div>
    )
}

export default PlantForm;
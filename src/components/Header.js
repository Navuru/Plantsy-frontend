import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
// import Header from "./Header";
import PlantContainer from "./PlantContainer";
import { useEffect, useState } from "react";

function Header (){

    const [plants,setPlants] = useState ([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('/plants')
    .then((r) => r.json())
    .then(data => setPlants(data))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }


  function handleDeletePlant(plantToDelete) {
    const updatedPlants = plants.filter((plant) => plant.id !== plantToDelete.id);
    setPlants(updatedPlants);
  }


  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) => 
    plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updatedPlants);
  }


  return (
   <>
  {showForm ? <PlantForm onAddPlant={handleAddPlant}/> : null }
  <div>
  <button onClick={handleClick}>Add a Plant</button>
  </div>
  <LoginForm/>
  <SignUpForm/>

  <PlantContainer
    plants={plants}
    onDeletePlant={handleDeletePlant}
    onUpdatePlant={handleUpdatePlant}
  />
  {/* <PlantCard/> */}
  
  </>
   
   
  );
}

export default Header;
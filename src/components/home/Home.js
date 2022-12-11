import PlantForm from "../pages/PlantForm";
import PlantContainer from "../pages/PlantContainer";
import "../home/Home.css"
import Header from "../pages/Header"
import { useEffect, useState } from "react";

function Home (){

    const [plants,setPlants] = useState ([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://plantsy-production-7d90.up.railway.app/plants')
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
   <Header setSearch={setSearch}/>
  {showForm ? <PlantForm onAddPlant={handleAddPlant}/> : null }
  <div>
  <button onClick={handleClick}>Add a Plant</button>
  </div>

    <div id = "grid-container">
  <PlantContainer
    search={search}
    plants={plants}
    onDeletePlant={handleDeletePlant}
    onUpdatePlant={handleUpdatePlant}
  />
  </div>
  
  </>
   
   
  );
}

export default Home;
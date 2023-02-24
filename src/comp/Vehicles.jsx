import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Vehicles (props){
  
  const starshipLink = `starships`
  const BASE_URL= `https://swapi.dev/api/`
  const[vehicle,setVehicle]=useState([])
    
    useEffect(()=>{

      const getVehicle = async()=>{
        const response = await axios.get(`https://swapi.dev/api/vehicles`)
        setVehicle(response.data.results)
        // console.log('hi',`${BASE_URL}${starshipLink}`)
        console.log(vehicle)
    }
      getVehicle()
    })
  

  


  let navigate = useNavigate()
  const showVehicle =(key) =>{
    navigate(`${key}`)
    console.log(key)
   
  
  }

  // model, manufacturer, 
  return (
    <div>
      <h1> Vehicle List</h1>
      {
        props.vehicle.map((vehicle,key) => (
          <div key={key} onClick={()=>showVehicle(key)} className="card">
            <h4>Name: {vehicle.name}</h4>
       
          </div>
        )) 
      }

    </div>

  )

}


export default Vehicles

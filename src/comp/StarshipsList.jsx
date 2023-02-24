import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function StartshipsList (props){
  
  const starshipLink = `starships`
  const BASE_URL= `https://swapi.dev/api/`
  const[starships,setStarships]=useState([])
    
    useEffect(()=>{

      const getStartships = async()=>{
        const response = await axios.get(`https://swapi.dev/api/starships`)
      setStarships(response.data.results)
        // console.log('hi',`${BASE_URL}${starshipLink}`)
        console.log(starships)
    }
        getStartships()
    })
  

  


  let navigate = useNavigate()
  const showStarship =(key) =>{
    navigate(`${key}`)
    console.log(key)
   
  
  }

  return (
    <div>
      <h1> Starship List</h1>
      {
        props.starships.map((starship,key) => (
          <div key={key} onClick={()=>showStarship(key)} className="card">
            <h5>{starship.name}</h5>
            <h6>{key}</h6>
          </div>
        )) 
      }

    </div>

  )

}


export default StartshipsList

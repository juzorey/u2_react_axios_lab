import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
export default function Planets (props) {

  const starshipLink = `starships`

    const BASE_URL= `https://swapi.dev/api/`
    
const[planet,setPlanet]=useState([])
  useEffect(()=>{
    const getPlanet = async()=>{
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanet(response.data.results)
      // console.log('hi',`${BASE_URL}${starshipLink}`)
       // has to have data
    }

    getPlanet()
})

let navigate = useNavigate()
const showStarship =(key) =>{
  navigate(`${key}`)
  console.log(key)
 

}


return (
<div>
<h1> Planet List</h1>
{
props.planet.map((planet, key) => (
  <div key={key} className="card">
    <h5>Name: {planet.name}</h5>
    
  </div>
)) 
}

</div>

)
}
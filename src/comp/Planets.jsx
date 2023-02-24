import { useEffect, useState } from "react"
import axios from 'axios'
export default function Planets () {

  const starshipLink = `starships`

    const BASE_URL= `https://swapi.dev/api/`
    
const[starships,setStarships]=useState([])
  useEffect(()=>{
    const getStartships = async()=>{
      const response = await axios.get(`https://swapi.dev/api/planets`)
    setStarships(response.data.results)
      console.log('hi',`${BASE_URL}${starshipLink}`)
       // has to have data
    }

    getStartships()
})

return (
<div>
<h1> Planet List</h1>
{
starships.map((starship) => (
  <div key={starship.id} className="card">
    <h5>{starship.name}</h5>
    
  </div>
)) 
}

</div>

)
}
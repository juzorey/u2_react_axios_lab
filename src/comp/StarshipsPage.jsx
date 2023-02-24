import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function StarshipsPage(){


const[starships, setStarships]=useState()

let { key } = useParams()
useEffect(()=>{
  const getStartships = async()=>{
    const response = await axios.get(`https://swapi.dev/api/starships`)
    setStarships(response.data.results[key])


    console.log(starships)


  }

  getStartships()
},[])



return starships ? (
  <div className="detail">
    <div className="detail-header">
      <h2>Hello</h2>
     
    </div>
    <div className="info-wrapper">
      <h3>Release Date:{starships.name} </h3>
     
    </div>
  </div>
) : <h3>Find ship...</h3>

}
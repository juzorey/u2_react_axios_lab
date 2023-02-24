import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Films(props){
  const[film,setFilm]=useState([])
useEffect(()=>{
  const getFilm = async()=>{
    const response = await axios.get(`https://swapi.dev/api/films`)
    setFilm(response.data.results)

    console.log('film',film)

    // has to have data
  }

  getFilm()
},[])


  return(
    <div>
      <h2>Films</h2>
      {
        props.film.map((film) => (
          <div className="card">
            <h4>Title: {film.title}</h4>
       
          </div>
        )) 
      }


    </div>
  )

}
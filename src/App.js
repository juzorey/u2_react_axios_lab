import Vehicles from './comp/Vehicles';
import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Planets from './comp/Planets';
import Characters from './comp/Characters';
import StartshipsList from './comp/StarshipsList.jsx';
import StarshipsPage from './comp/StarshipsPage';
import { useEffect, useState } from 'react';
import Films from './comp/Film';

function App() {
  const[starships,setStarships]=useState([])
  const[vehicle,setVehicle]=useState([])
  const[planet,setPlanet]=useState([])
  const[film,setFilm]=useState([])

  useEffect(()=>{
    const getStartships = async()=>{
      const response = await axios.get(`https://swapi.dev/api/starships`)
    setStarships(response.data.results)

      console.log(starships)
 
      // has to have data
    }

    getStartships()
},[])



useEffect(()=>{
  const getVehicle = async()=>{
    const response = await axios.get(`https://swapi.dev/api/vehicles`)
    setVehicle(response.data.results)

    console.log(vehicle)

    // has to have data
  }

  getVehicle()
},[])

useEffect(()=>{
  const getPlanet = async()=>{
    const response = await axios.get(`https://swapi.dev/api/planets`)
    setPlanet(response.data.results)

    console.log(vehicle)

    // has to have data
  }

  getPlanet()
},[])


useEffect(()=>{
  const getFilm = async()=>{
    const response = await axios.get(`https://swapi.dev/api/films`)
    setFilm(response.data.results)

    console.log('film',film)

    // has to have data
  }

  getFilm()
},[])





  
  return (
    <div className="App">
      <div className="starship-list">
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/StarshipsList' element={<StartshipsList starships={starships}/>}></Route>
        <Route path='/Planets' element={<Planets />}></Route>
        <Route path='/Characters' element={<Characters/>}></Route>
        <Route path="/StarshipsList/:key" element={<StarshipsPage/>}></Route>
        <Route path='/Vehicles' element={<Vehicles vehicle={vehicle}/>}></Route>
        <Route path='/Planet' element={<Planets planet={planet}/>}></Route>
        <Route path="/Film" element={<Films film={film}/>}></Route>

      </Routes>

      
      </div>
     
    </div>
  


  );
}

export default App;

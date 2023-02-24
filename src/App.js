import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Planets from './comp/Planets';
import Characters from './comp/Characters';
import StartshipsList from './comp/StarshipsList.jsx';
import StarshipsPage from './comp/StarshipsPage';
import { useEffect, useState } from 'react';

function App() {
  const[starships,setStarships]=useState([])

  useEffect(()=>{
    const getStartships = async()=>{
      const response = await axios.get(`https://swapi.dev/api/starships`)
    setStarships(response.data.results)

      console.log(starships)
 
      // has to have data
    }

    getStartships()
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
      </Routes>

      
      </div>
     
    </div>
  


  );
}

export default App;

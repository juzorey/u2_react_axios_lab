
import { useNavigate } from 'react-router-dom'; // useNavigate to go to pages
import { useState, useEffect } from 'react'; //  use state is to have information be changed trhought a new state and not change the intial state unless touched. the states can be passed to others through props where the props cab take the the state keys or variables
import axios from 'axios';
function StartshipsList (props){
  
 
  const[starships,setStarships]=useState([])
    
    useEffect(()=>{ // the use of useEffect is for

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

  // model, manufacturer, 
  return (
    <div>
      <h1> Starship List</h1>
      {
        props.starships.map((starship,key) => (
          <div key={key} onClick={()=>showStarship(key)} className="card">
            <h4>Name: {starship.name}</h4>
       
          </div>
        )) 
      }

    </div>

  )

}


export default StartshipsList

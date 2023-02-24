import {Link} from 'react-router-dom'

export default function Landing(){

  return(
    <div>
      <h1>This is the landing page</h1>
      <nav>
        <li><Link to="/">home</Link></li>
        <li><Link to="/StarshipsList">StarshipsList</Link></li>
        <li><Link to="/Planets">Planets</Link></li>
        <li><Link to="/Characters">Characters</Link></li>
      </nav>
    </div>
  )
}
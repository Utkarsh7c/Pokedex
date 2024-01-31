import { Link } from 'react-router-dom';
import './pokemon.css'
function Pokemon({name,image ,id}){

    return (
              <div className='pokemon'>
<Link to = {`/pokemon/${id}`}>

<div className='naam'>
       {name }
</div>
  <div>    <img src = {image} />    </div>  
  
  </Link>
  
</div>
  )
}
export default Pokemon;
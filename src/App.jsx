import Pokedex from './components/Pokedex/Pokedex'
import PokemonList from './components/pokemonList/PokemonList'
import './App.css'
import CustomRoutes from './routes/customroutes/CustomRoutes'

function App() {
 

  return (
    <>
    <div className='hii'>
     <h1    id="pokedexHeading">
     PokeDex
     {/* <Link to="/">Pokedex</Link> */}
     </h1>
     </div>
     
    <CustomRoutes/>
    {/* <Pokedex/> */}
    
           </>
  )
}

export default App

import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Pokedex from "../../components/Pokedex/Pokedex"
import PokemonDetails from "../../components/pokemonDetails/PokemonDetails"
function CustomRoutes(){
    return(
<Routes>
<Route      path="/" element={<Pokedex/>} />  
 <Route  path ="/pokemon/:id"  element={<PokemonDetails/>}/> 
 {/* <Route path="/pokemon/search/:id" element={<PokemonDetails/>}/> */}
</Routes>

    )
}
export default CustomRoutes
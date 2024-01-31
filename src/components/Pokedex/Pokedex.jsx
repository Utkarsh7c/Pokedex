import Search from "../Search/Search";
import PokemonList from "../pokemonList/PokemonList";
import { useState } from "react";
import './pokedex.css'
import PokemonDetails from "../pokemonDetails/PokemonDetails";
function Pokedex(){
     const[searchTerm,setSearchTerm]=useState('')
return (
<div className="pokedex-wrapper">
     
     {/* <h1 id="pokedexHeading">Pokedex</h1> */}

<Search  updateSearchTerm={setSearchTerm} />
{/* {searchTerm} */}
    {/* searchTerm.length==0 */}
    { (!searchTerm)?<PokemonList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
     {/* any changes in key will rerenders the react components which we want to fetch the data withPokemonname  */}
</div>
)

}
export default Pokedex;

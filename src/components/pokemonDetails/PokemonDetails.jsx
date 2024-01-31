
import  axios  from "axios";
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Details.css'
import usePokemonList from "../hooks/usePokemon";
import usePokemonDetails from "../hooks/usePokemonDetails";
function PokemonDetails({pokemonName}){
const {id}=useParams();
// const [pokemon,setpokemon]=useState({});
// const[isLoading,setisLoading]=useState(true)
// console.log(id);
//   async function DownLoadPokemon(){
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   console.log(response.data)
//   setpokemon({
//     name:response.data.name,
//     image:response.data.sprites.other.dream_world.front_default,
//     weigth:response.data.weight,
//     height:response.data.height,
//     types:response.data.types.map((t)=>t.type.name)
//   })
//   return response;
//  }

//  const {PokemonListState,setPokemonListState}=usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types?pokemon.types[0]:'water'}`,true);

// useEffect( ()=> {
//   DownLoadPokemon()
// },[]);
const[pokemon]=usePokemonDetails(id,pokemonName)

    return(

        <div className="div">
            
            
               
    <img className="image" src={pokemon.image} alt="Image Loading" />
        <div className="name"> {pokemon.name}</div>
         <div className="name"> Weight: {pokemon.height}</div>
          <div className="name"> Height:{pokemon.height}</div>
           <div className="types">type: {pokemon.types} </div>                             
        

{
      pokemon.types && pokemon.simillarPokemons && 
  <div>
    <b>More</b> {pokemon.types[0]}  <b>Types</b> Pokemons
    <ul>
      {pokemon.simillarPokemons.map((p)=><li key={p.pokemon.url}> {p.pokemon.name} </li>)}
    </ul>
    </div>
}

        
         
         <button className="btn"> <Link to="/">Back to home page</Link> </button>
         
        </div>
        )
}
export default PokemonDetails
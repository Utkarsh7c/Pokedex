// import usePokemonList from "./usePokemon";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from 'axios'
function usePokemonDetails(id,pokemonName){
    
    const [pokemon,setpokemon]=useState({});
    
    console.log(id);
      async function DownLoadPokemon(){
        try{
        let response;
        if(pokemonName){
          response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }
        else{
          response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        }
           const pokemonOfSameType=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types?response.data.types[0].type.name:''}`);

      console.log(response.data)
      setpokemon({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weigth:response.data.weight,
        height:response.data.height,
        types:response.data.types.map((t)=>t.type.name),
        simillarPokemons: pokemonOfSameType.data.pokemon.slice(0,6)
      })
      
      setPokemonListState({...PokemonListState , type:response.data.types?response.data.types[0].type.name:''})
    }
catch(error){
  console.log("error is there")
}
  }
    const [PokemonListState,setPokemonListState]= useState({})
    
    useEffect( ()=> {
        DownLoadPokemon()
      },[]);
      
return[pokemon,PokemonListState]
}
export default usePokemonDetails;
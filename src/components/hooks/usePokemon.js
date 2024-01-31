import axios from 'axios'
import { useEffect, useState } from "react"
function usePokemonList(){
    const [PokemonListState,setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        Purl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:''
        
       })
       async function  DownloadList(){
           setPokemonListState((state)=>({...state,isLoading:true}))
            const response= await axios.get(PokemonListState.Purl);
            console.log("response is ",response.data.results);
             const pokemonresults= response.data.results ;
             //setnextUrl(response.data.next);
             setPokemonListState((state)=>(
              {... state,
               nextUrl:response.data.next,
               prevUrl:response.data.previous
              

              }));
//               if(type){
//        setPokemonListState((state)=>({
//         ...state,
//          pokemonList:response.data.pokemon.slice(0,6)

//        }))
// //console.log("type",response.data.pokemon)
//               }
//               else{

//               }
            
             // setprevUrl(response.data.previous);
             // iterate over an array of 20 pokemon:  
            const pokemonResultPromise=await pokemonresults.map((pokemon)=> axios.get(pokemon.url)) // array of each pokemon data
          // console.log(pokemonResultPromise)  
          //passing promise arrays to axios.all for resolving and showing all data 
            const pokemondata= await axios.all(pokemonResultPromise) // all detailed data of each pokemon
              console.log(pokemondata)
             // now iterate and extract each pokemon's data  and return an array of object 
              const PokemonResult=pokemondata.map((pokeData)=>{
                const pokemon= pokeData.data
                return {
                    id:pokemon.id ,
                    name:pokemon.name ,
                  image:(pokemon.sprities&&pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                 types:pokemon.types
    
                }
              })
             // setpokemonList(PokemonResult);
             // clean up code : 
             setPokemonListState((state)=>({
              
              ...state,pokemonList:PokemonResult
              ,isLoading:false}));
            } 
            useEffect(()=>{
          DownloadList()
            },[PokemonListState.Purl])
    
     return [PokemonListState,setPokemonListState]  
}
export default usePokemonList
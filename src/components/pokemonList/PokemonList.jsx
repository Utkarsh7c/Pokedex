import { useEffect, useState } from "react";
import axios from 'axios' 
import './pokemonlist.css'
import AutorenewIcon from '@mui/icons-material/Autorenew';

import Pokemon from "../pokemon/Pokemon";
import usePokemonList from "../hooks/usePokemon";
function PokemonList(){
  //  const[pokemonList,setpokemonList]=useState([]);
  //  const[isLoading,setisLoading]=useState(true)
  // const[Purl,setPokedexurl]=useState('https://pokeapi.co/api/v2/pokemon')
                                                                            //const Purl='https://pokeapi.co/api/v2/pokemon'
//    const[nextUrl,setnextUrl]=useState('');
//  const[prevUrl,setprevUrl]=useState('');
// use of advance UseState Hook 
  
//REPLACE USING CUSTOMS HOOKS ::::

//  const [PokemonListState,setPokemonListState]=useState({
//   pokemonList:[],
//   isLoading:true,
//   Purl:'https://pokeapi.co/api/v2/pokemon',
//   nextUrl:'',
//   prevUrl:''
//  })
//    async function  DownloadList(){
//     // setisLoading(true);
//     setPokemonListState((state)=>({...state,isLoading:true}))
//         const response= await axios.get(PokemonListState.Purl);
//         console.log("response is ",response.data.results);
//          const pokemonresults= response.data.results ;
//          //setnextUrl(response.data.next);
//          setPokemonListState((state)=>(
//           {... state,
//            nextUrl:response.data.next,
//            prevUrl:response.data.previous
          
//           }));
        
//          // setprevUrl(response.data.previous);
//          // iterate over an array of 20 pokemon:  
//         const pokemonResultPromise=await pokemonresults.map((pokemon)=> axios.get(pokemon.url)) // array of each pokemon data
//       // console.log(pokemonResultPromise)  
//       //passing promise arrays to axios.all for resolving and showing all data 
//         const pokemondata= await axios.all(pokemonResultPromise) // all detailed data of each pokemon
//           console.log(pokemondata)
//          // now iterate and extract each pokemon's data  and return an array of object 
//           const PokemonResult=pokemondata.map((pokeData)=>{
//             const pokemon= pokeData.data
//             return {
//                 id:pokemon.id ,
//                 name:pokemon.name ,
//               image:(pokemon.sprities&&pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
//              types:pokemon.types

//             }
//           })
//          // setpokemonList(PokemonResult);
//          // clean up code : 
//          setPokemonListState((state)=>({
          
//           ...state,pokemonList:PokemonResult
//           ,isLoading:false}));
//         } 

//         //setisLoading(false);
//         //  setPokemonListState({...PokemonListState,isLoading:false});               
//     useEffect(  ( ) =>{
//           DownloadList();   
//     },[PokemonListState.Purl]);


const [PokemonListState,setPokemonListState]=usePokemonList(false);    
    return(
      
<div className="pokemonlist-wrapper">

    {/* <div className="list">List of pokemon</div> */}
   
   <div className="pokemon-wrapper">
   
   {
    // <div className="load">'Loading....'
    
    (PokemonListState.isLoading)? <div ><AutorenewIcon className="rotation-icon"   style={{ fontSize: '12em' }} />
     <div className="load">Loading</div>
    </div>
   :  
      PokemonListState.pokemonList.map((p)=><Pokemon name={p.name}  image={p.image} key={p.id} id={p.id}/>)
   } 
   </div>
   <div className="controls">
    <button disabled={PokemonListState.prevUrl == null} onClick={()=> setPokemonListState({...PokemonListState,Purl:PokemonListState.prevUrl})}>Prev</button>
    <button disabled={PokemonListState.nextUrl ==null} onClick={()=>setPokemonListState({...PokemonListState,Purl:PokemonListState.nextUrl})}>Next</button>
   </div>

</div>

    )
  }
export default PokemonList;
import PokemonDetails from '../pokemonDetails/PokemonDetails';
import './Search.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {  useParams } from 'react-router-dom';
import useDebouncing from '../hooks/useDebouncing';
function Search({ updateSearchTerm}){
const debounceCallBack=useDebouncing((e)=>   updateSearchTerm(e.target.value))

return (
<div className='search-wrapper'>
<input id='pokemon-name-search' type="text" placeholder="Pokemon name ...."
// onChange={(e)=>   updateSearchTerm(e.target.value) }
onChange={debounceCallBack}
/>



</div>
)
}

export default Search;

import React, {useState, useEffect} from 'react';
import pokemonResult from './FetchApi.jsx'
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonDetails,setPokemonDetails] = useState();

  useEffect(() => {
    if(pokemonName !== ""){
      const getData = setTimeout(() => {
        pokemonResult(pokemonName).then((data) => {
          setPokemonDetails(data);
        })
      }, 2000)

      return () => clearTimeout(getData);
    }
    else {
      setPokemonDetails('');
    }
  },[pokemonName])
  
  return (
    <div className='App'>
      <input type="search" placeholder="enter the pokemon" value={pokemonName} onChange={(e) => {setPokemonName(e.target.value)}}></input>
      { pokemonDetails && <>
      <p>{pokemonDetails?.name}</p>
      <p>{pokemonDetails?.weight}</p>
      <div>Abilities: {pokemonDetails.abilities.map((data,index) => <p key={index}>{data?.ability?.name}</p> )}</div>
      </>}
    </div>
  );
}

export default App;

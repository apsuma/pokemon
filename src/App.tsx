import React, { FunctionComponent, useState, useEffect} from 'react';
import Pokemon from "./models/pokemon"
import POKEMONS from './models/mock-pokemon'
  
const App: FunctionComponent = () => {
 
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
     setPokemons(POKEMONS);
 }, []);   

 
    
 return (
  <div>
    <h1>Pokedex</h1>
    <h1>Bonjour, nombre de pokemons dans le Pokedex  : {pokemons.length}</h1>
  </div>
 )
}
  
export default App;
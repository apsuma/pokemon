import React, { FunctionComponent, useState, useEffect} from 'react';
import Pokemon from "./models/pokemon"
import POKEMONS from './models/mock-pokemon'
  
const App: FunctionComponent = () => {
 
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
     setPokemons(POKEMONS);
 }, []);   

 
    
 return (
  <div className="container">
    <h1>Pokedex</h1>
    <h4>Bonjour, nombre de pokemons dans le Pokedex  : {pokemons.length} </h4>
    <h2>Liste des pokemons:</h2>
    <ul className="row">
        { pokemons.map((pokemon) => (
        <div className="col s2">
            <li key={pokemon.id} className="card">
                <div className="card-image z-depth-4 circle responsive-img">
                    <img  src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <div className="card-content">
                    <span className="card-title black-text">{pokemon.name}</span>
                    <p >{pokemon.types}</p>
                </div>
            </li>
        </div>
        ))}

    </ul>
  </div>
 )
}
  
export default App;
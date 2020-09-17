import React, { FunctionComponent} from 'react';
import usePokemons from '../hooks/pokemon.hook';
import PokemonCard from '../components/pokemon-card';

const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemons();  
  
 return (
  <div>
    <h1 className="center">Pokedex</h1>
    <div className="container">
        <div className="row">
            { pokemons.map((pokemon) => (
                < PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
    </div>
  </div>
 );
}

export default PokemonList;
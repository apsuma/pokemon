import React, { FunctionComponent} from 'react';
import usePokemons from '../hooks/pokemon.hook';
import PokemonCard from '../components/pokemon-card';
import { Link } from 'react-router-dom';

const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemons();  
  
 return (
  <div>
    <h1 className="center">Pokedex</h1>
    <div className="container">
        <div className="row">
            <Link to={'/pokemons/new'} className="btn btn-floating halfway-fab waves-effect waves-light">
                <i className="material-icons">add</i>
            </Link>
        </div>
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
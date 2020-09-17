import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

 
  
const PokemonAdd: FunctionComponent = () => {
  const [id] = useState<number>(new Date().getTime());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));
     
  return (
    <div>
        <div className="row">
            <h2 className="header center">Ajouter un nouveau Pokemon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
    </div>
  );
}
  
export default PokemonAdd;
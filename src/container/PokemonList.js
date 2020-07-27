import React from 'react'
import Pokemon from '../component/Pokemon';

const PokemonList = () => {
    return (
        <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
            {[1, 2, 3, 4, 5].map(eachData => (
                <Pokemon key={eachData} pokemon={{id: eachData, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', name: 'test'}} />
            ))}
        </div>
    );
}

export default PokemonList;
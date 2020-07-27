import axios from 'axios';

export const INIT_POKEMON = 'INIT_POKEMON';
export const ADD_MORE = 'ADD_MORE';

export const addPokemon = (payload) => {
    return {
        type: ADD_MORE,
        payload
    }
}

export const initPokemon = (pokemons) => {
    return {
        type: INIT_POKEMON,
        pokemons
    }
}

export const fetchPokemon = (totalPokemon) => {
    return async dispatch => {
        let temp = [];
        for (let i=1;i<=totalPokemon;i++) {
          const result = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
          temp = [...temp, {
            id: i,
            name: result.data.name,
            img: result.data.sprites.front_default,
            move: result.data.moves,
            type: result.data.types,
            owned: 0
          }];
        }
        dispatch(initPokemon(temp));
    }
}
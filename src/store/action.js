import axios from 'axios';

export const INIT_POKEMON = 'INIT_POKEMON';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const ADD_MORE = 'ADD_MORE';
export const API_URL = 'https://pokeapi.co';

export const addPokemon = () => {
    return {
        type: ADD_MORE,
    }
}

export const toggleLoading = () => {
    return {
        type: TOGGLE_LOADING,
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
        let resultFetch = [];
        for (let idPokemon=1;idPokemon<=totalPokemon;idPokemon++) {
          const result = await axios(`${API_URL}/api/v2/pokemon/${idPokemon}`);
          resultFetch = [...resultFetch, {
            id: idPokemon,
            name: result.data.name,
            img: result.data.sprites.front_default,
            move: result.data.moves,
            type: result.data.types,
            owned: 0
          }];
        }
        dispatch(initPokemon(resultFetch));
    }
}
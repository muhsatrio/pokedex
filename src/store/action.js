import axios from 'axios';
import {capitalizeLetter} from '../util/util'

export const INIT_POKEMON = 'INIT_POKEMON';
export const INIT_ONE_POKEMON = 'INIT_ONE_POKEMON';
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

export const initOnePokemon = (pokemon) => {
    return {
        type: INIT_ONE_POKEMON,
        pokemon
    }
}

export const fetchPokemon = (totalPokemon) => {
    return async dispatch => {
        let resultFetch = [];
        for (let idPokemon=1;idPokemon<=totalPokemon;idPokemon++) {
          const result = await axios(`${API_URL}/api/v2/pokemon/${idPokemon}`);
          resultFetch = [...resultFetch, {
            id: idPokemon,
            name: capitalizeLetter(result.data.name),
            species: capitalizeLetter(result.data.species.name),
            img: result.data.sprites.front_default,
            type: result.data.types.map(eachType => capitalizeLetter(eachType.type.name)),
            abilities: result.data.abilities.map(eachType => capitalizeLetter(eachType.ability.name)),
            moves: result.data.moves.map(eachType => capitalizeLetter(eachType.move.name)),
          }];
        }
        dispatch(initPokemon(resultFetch));
    }
}

export const fetchOnePokemon = (idPokemon) => {
    return async dispatch => {
        const result = await axios(`${API_URL}/api/v2/pokemon/${idPokemon}`);
        dispatch(initOnePokemon({
            id: idPokemon,
            name: capitalizeLetter(result.data.name),
            species: capitalizeLetter(result.data.species.name),
            img: result.data.sprites.front_default,
            type: result.data.types.map(eachType => capitalizeLetter(eachType.type.name)),
            abilities: result.data.abilities.map(eachType => capitalizeLetter(eachType.ability.name)),
            moves: result.data.moves.map(eachType => capitalizeLetter(eachType.move.name)),
        }));
    }
}
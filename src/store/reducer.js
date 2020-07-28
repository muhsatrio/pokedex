import { capitalizeLetter } from '../util/util';
import {ADD_MORE, 
    INIT_POKEMON, 
    TOGGLE_LOADING, 
    INIT_ONE_POKEMON, 
    INIT_TYPES,
    FILTER} 
    from './action';

const initialState = {
    pokemons: null,
    filteredPokemons: null,
    onePokemon: null,
    totalPokemon: 20,
    loading: false,
    types: null,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MORE:
            state.loading = true;
            const newTotalPokemon = state.totalPokemon + 5;
            return {
                ...state,
                totalPokemon: newTotalPokemon
            }
        case INIT_POKEMON:
            state.loading = false;
            return {
                ...state,
                pokemons: action.pokemons,
                filteredPokemons: action.pokemons
            }
        case INIT_ONE_POKEMON:
            state.loading = false;
            return {
                ...state,
                onePokemon: action.pokemon
            }
        case FILTER:
            let newFilteredPokemon = null;
            if (action.tag==='all') {
                newFilteredPokemon = state.pokemons;
            }
            else {
                newFilteredPokemon = state.pokemons.filter(eachPokemon => {
                    return eachPokemon.type.includes(capitalizeLetter(action.tag));
                });
            }
            return {
                ...state,
                filteredPokemons: newFilteredPokemon
            }
            
        case INIT_TYPES:
            state.loading = false;
            return {
                ...state,
                types: [...action.types, 'all']
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return state;
    }
}

export default reducer;
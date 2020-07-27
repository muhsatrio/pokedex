import {ADD_MORE, INIT_POKEMON} from './action';

const initialState = {
    pokemons: null,
    totalPokemon: 20,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MORE:
            const newTotalPokemon = state.totalPokemon + 5;
            return {
                ...state,
                totalPokemon: newTotalPokemon
            }
        case INIT_POKEMON:
            return {
                ...state,
                pokemons: action.pokemons
            }
        default:
            return state;
    }
}

export default reducer;
import {ADD_MORE, INIT_POKEMON, TOGGLE_LOADING} from './action';

const initialState = {
    pokemons: null,
    totalPokemon: 20,
    loading: false
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
                pokemons: action.pokemons
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
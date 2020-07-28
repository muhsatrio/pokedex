import {ADD_MORE, INIT_POKEMON, TOGGLE_LOADING, INIT_ONE_POKEMON} from './action';

const initialState = {
    pokemons: null,
    onePokemon: null,
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
        case INIT_ONE_POKEMON:
            state.loading = false;
            return {
                ...state,
                onePokemon: action.pokemon
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
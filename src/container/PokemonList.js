import React from 'react'
import Pokemon from '../component/Pokemon';
import Spinner from '../component/Spinner';
import {connect} from 'react-redux';

const PokemonList = (props) => {
    let page = <Spinner />;
    if (props.listPokemons) {
        page = (
            <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
                {props.listPokemons.map((item, key) => <Pokemon pokemon={item} key={key} /> )}
            </div>
        );
    }
    return page;
}

const mapStateToProps = state => {
    return {
        listPokemons: state.pokemons
    }
}

export default connect(mapStateToProps)(PokemonList);
import React from 'react'
import Pokemon from '../component/Pokemon';
import Spinner from '../component/Spinner';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {addPokemon} from '../store/action';

const PokemonList = (props) => {
    let page = <Spinner />;
    if (props.listPokemons) {
        page = (
            <div className="Home">
                <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {props.listPokemons.map((item, key) => <Pokemon pokemon={item} key={key} /> )}
                </div>
                <Button style={{margin: "10px"}} variant="primary" onClick={props.addMore}>Add More</Button>
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

const mapDispatchToProps = dispatch => {
    return {
        addMore: () => dispatch(addPokemon())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
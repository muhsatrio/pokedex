import React from 'react'
import Pokemon from '../component/Pokemon';
import Spinner from '../component/Spinner';
import {connect} from 'react-redux';
import {Button, Container} from 'react-bootstrap';
import {addPokemon, toggleLoading} from '../store/action';
import FilterBar from './FilterBar';

const PokemonList = (props) => {

    let page = <Spinner small={false} />;
    if (props.listPokemons) {
        page = (
            <div className="Home">
                <Container>
                    <FilterBar />
                    <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
                        {props.listPokemons.map((item, key) => <Pokemon pokemon={item} key={key} /> )}
                    </div>
                    <Button style={{margin: "10px"}} variant="primary" onClick={props.addMore}>Add More</Button>{props.loading ? (<Spinner small={true} />) : null}
                </Container>
            </div>
        );
    }
    return page;
}

const mapStateToProps = state => {
    return {
        listPokemons: state.filteredPokemons,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMore: () => dispatch(addPokemon()),
        toggleLoading: () => dispatch(toggleLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
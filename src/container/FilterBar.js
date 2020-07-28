import React, {useEffect} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchTypes, filterPokemon} from '../store/action';

const FilterBar = (props) => {

    useEffect(() => {
        props.onInitTypes();
      }, [props]);

    return (
        <div className="FilterBar">
            <p>Search by Type</p>
            <Row>
                {props.types ? (
                    props.types.map((eachType, i) => (
                        <span key={i} style={{margin: '5px'}}>
                            <Button onClick={() => props.filterFunc(eachType)} variant="primary">{eachType}</Button>{' '}
                        </span>
                    ))
                ) : null}
            </Row>
            <hr/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTypes: () => dispatch(fetchTypes()),
        filterFunc: (tag) => dispatch(filterPokemon(tag)) 
    }
}

const mapStateToProps = state => {
    return {
        types: state.types
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
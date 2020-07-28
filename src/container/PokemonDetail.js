import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {Row, Col, Badge} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Spinner from '../component/Spinner';
import {fetchOnePokemon } from '../store/action';

const PokemonDetail = (props) => {

    const { idPokemon } = useParams();

    useEffect(() => {
        props.fetchOnePokemon(idPokemon);
    }, [props]);

    const divStyle = {
        padding: '10px',
        textAlign: 'left',
        maxWidth: '350px',
        margin: '0 auto'
    }

    let page = <Spinner small={false} />

    if (props.onePokemon) {
        page = (
            <div className="detailPokemon" style={divStyle}>
                <h1>Pokemon Detail</h1>
                <div style={{textAlign: 'center'}}>
                    <img src={props.onePokemon.img} style={{height: '200px'}} alt="" />
                </div>
                <Row>
                    <Col><b>Name: </b>{props.onePokemon.name}</Col>
                </Row>
                <Row>
                    <Col xs="2"><b>Type: </b></Col>
                    <Col xs="10">
                        {props.onePokemon.type.map((eachType, i) => (
                            <span key={i}>
                                <Badge variant="primary">{eachType}</Badge>{' '}
                            </span>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col xs="2"><b>Ability: </b></Col>
                    <Col xs="10">
                        {props.onePokemon.abilities.map((eachAbility, i) => (
                            <span key={i}>
                                <Badge variant="danger">{eachAbility}</Badge>{' '}
                            </span>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col xs="2"><b>Move: </b></Col>
                    <Col xs="10">
                        {props.onePokemon.moves.map((eachMove, i) => (
                            <span key={i}>
                                <Badge variant="dark">{eachMove}</Badge>{' '}
                            </span>
                        ))}
                    </Col>
                </Row>
            </div>
        )
    }

    return page;
}

const mapStateToProps = state => {
    return {
        onePokemon: state.onePokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOnePokemon: (id) => dispatch(fetchOnePokemon(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

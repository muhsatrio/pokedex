import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavbarPage from './container/NavbarPage';
import PokemonList from './container/PokemonList';
import NotFound from './container/NotFound';
import {connect} from 'react-redux';
import {fetchPokemon} from './store/action';

function App(props) {

  useEffect(() => {
    props.onInitPokemon(props.totalPokemon);
  }, [props]);

  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPokemon: (totalPokemon) => dispatch(fetchPokemon(totalPokemon))
  }
}

const mapStateToProps = state => {
  return {
    totalPokemon: state.totalPokemon
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

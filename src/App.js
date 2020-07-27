import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavbarPage from './container/NavbarPage';
import PokemonList from './container/PokemonList';
import NotFound from './container/NotFound'

function App() {
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

export default App;

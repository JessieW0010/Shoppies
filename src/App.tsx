import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './components/SearchResult'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <Switch>
      <Route path="/search/:id" component={SearchResult} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MovieInfo} />
    </Switch>
  );
}

export default App;


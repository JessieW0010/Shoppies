import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './components/SearchResult'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieInfo from './components/MovieInfo';
import Register from './components/Register';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';

function App() {
  return (
    <Switch>
      <Route path="/search/:id" component={SearchResult} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MovieInfo} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/welcome" component={Welcome} />
    </Switch>
  );
}

export default App;


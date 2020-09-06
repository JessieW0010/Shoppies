import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './components/SearchResult'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/search/:id" component={SearchResult} />
    </Switch>
  );
}

export default App;


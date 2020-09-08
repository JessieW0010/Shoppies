import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './components/SearchResult'
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieInfo from './components/MovieInfo';
import Register from './components/Register';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import { Loader } from './components/common';
import { connect } from 'react-redux';
import { ApplicationState, IUser } from './types';

interface StateProps {
  isLoading: boolean;
  user: IUser;
}

function App({ isLoading, user }: StateProps) {
  if (isLoading) {
    return <Loader/>
  } else {
    return (
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/welcome" component={Welcome} />
        { user ? <Switch>
                  <Route path="/search/:id" component={SearchResult} />
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/movie/:id" component={MovieInfo} />
                </Switch> : <Redirect to="welcome"/>
        }
      </Switch>
    );
  }
}

const mapStateToProps = (store: ApplicationState) => ({
  isLoading: store.isLoading,
  user: store.user
});

export default connect<{}, {}, any, any>(mapStateToProps)(App);

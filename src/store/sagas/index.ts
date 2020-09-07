import { all } from 'redux-saga/effects';
import watchGetSearchResults from './handleGetResults';
import watchGetMovieInfo from './handleGetMovieInfo';
import watchSignIn from './handleSignIn';
import watchRegister from './handleRegister';
import watchNominateMovie from './handleNomination';
import watchGetUserMovies from './handleGetUserMovies';

export default function* rootSaga() {
  yield all([
    watchGetSearchResults(),
    watchGetMovieInfo(),
    watchSignIn(),
    watchRegister(),
    watchNominateMovie(),
    watchGetUserMovies()
  ]);
}


import { all } from 'redux-saga/effects';
import watchGetSearchResults from './handleGetResults';
import watchGetMovieInfo from './handleGetMovieInfo';
import watchSignIn from './handleSignIn';
import watchRegister from './handleRegister';

export default function* rootSaga() {
  yield all([
    watchGetSearchResults(),
    watchGetMovieInfo(),
    watchSignIn(),
    watchRegister()
  ]);
}


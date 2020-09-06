import { all } from 'redux-saga/effects';
import watchGetSearchResults from './handleGetResults';

export default function* rootSaga() {
  yield all([
    watchGetSearchResults()
  ]);
}


import { all } from 'redux-saga/effects';
import search from '../sagas'

export default function* rootSaga() {
  yield all([
    search.watchGetSearchResults()
  ]);
}

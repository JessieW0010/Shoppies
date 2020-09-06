import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_SEARCH_RESULTS, GET_SEARCH_RESULTS_SUCCESS, SEARCH_RESULT_ERROR } from '../constants';
import { search } from '../../api';
import { ISearchResponse } from '../../types';

export function* handleGetSearchResults({ 
  searchTerm
}: any) {
  try {
    const response: ISearchResponse = yield call(search, { title: searchTerm });
    if (response.status === 200) {
      yield put({
        type: GET_SEARCH_RESULTS_SUCCESS,
        movie: response.data
      })
    }
  } catch (err) {
    yield put({
      type: SEARCH_RESULT_ERROR
    })
  }
}

export default function* watchGetSearchResults() {
  yield takeEvery(GET_SEARCH_RESULTS, handleGetSearchResults);
}

import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_SEARCH_RESULTS, GET_SEARCH_RESULTS_SUCCESS, GET_SEARCH_RESULTS_ERROR } from '../constants';
import { searchByTitle } from '../../api';
import { ISearchResponse } from '../../types';
import { IGetSearchResults } from '../../types/actionTypes';

export function* handleGetSearchResults({ 
  searchTerm,
  page
}: IGetSearchResults) {
  try {
    const response: ISearchResponse = yield call(searchByTitle, { title: searchTerm, page });
    if (response.status === 200) {
      yield put({
        type: GET_SEARCH_RESULTS_SUCCESS,
        movies: response.data.movies,
        totalResults: parseInt(response.data.totalResults)
      })
    }
  } catch (err) {
    yield put({
      type: GET_SEARCH_RESULTS_ERROR
    })
  }
}

export default function* watchGetSearchResults() {
  yield takeEvery(GET_SEARCH_RESULTS, handleGetSearchResults);
}

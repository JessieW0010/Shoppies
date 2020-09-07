import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_USER_MOVIES, GET_USER_MOVIES_SUCCESS, GET_USER_MOVIES_ERROR } from '../constants';
import { getNominatedMovies } from '../../api';
import { INominateMovieResponse } from '../../types';
import { INominateMovie } from '../../types/actionTypes';
export function* handleGetUserMovies() {
  try {
    console.log('hihi')
    const response: INominateMovieResponse = yield call(getNominatedMovies);
    if (response.status === 200) {
      console.log(response)
      // yield put({
      //   type: GET_USER_MOVIES_SUCCESS,
      //   movie
      // })
    }
  } catch (err) {
    yield put({
      type: GET_USER_MOVIES_ERROR
    })
  }
}

export default function* watchGetUserMovies() {
  yield takeEvery(GET_USER_MOVIES, handleGetUserMovies);
}

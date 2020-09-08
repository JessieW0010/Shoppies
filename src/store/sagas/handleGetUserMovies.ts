import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_USER_MOVIES, GET_USER_MOVIES_SUCCESS, GET_USER_MOVIES_ERROR } from '../constants';
import { getNominatedMovies, searchById } from '../../api';
import { INominateMovieResponse, ISearchMovieInfoResponse } from '../../types';
export function* handleGetUserMovies() {
  try {
    const response: INominateMovieResponse = yield call(getNominatedMovies);
    if (response.status === 200) {
      const movieIds = response.data.nominated;
      let nominations = [];
      if (movieIds.length) {
        for (let i = 0; i < movieIds.length; i ++) {
          let movieInfo: ISearchMovieInfoResponse = yield call(searchById, { id: movieIds[i].imdbID });
          nominations.push(movieInfo.data.movie);
        }
      }
      yield put({
        type: GET_USER_MOVIES_SUCCESS,
        nominations
      })
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

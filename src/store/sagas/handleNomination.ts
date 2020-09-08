import { put, takeEvery, call } from 'redux-saga/effects';
import { NOMINATE_MOVIE, NOMINATE_MOVIE_SUCCESS, NOMINATE_MOVIE_ERROR } from '../constants';
import { nominateMovie } from '../../api';
import { INominateMovieResponse } from '../../types';
import { INominateMovie } from '../../types/actionTypes';
import { toast } from 'react-toastify';
export function* handleNominateMovie({ 
  movie
}: INominateMovie) {
  try {
    const notify = () => toast(`Successfully nominated ${movie.Title} (${movie.Year})`);
    const response: INominateMovieResponse = yield call(nominateMovie, { imdbIDs: [movie.imdbID] });
    if (response.status === 200) {
      notify();
      yield put({
        type: NOMINATE_MOVIE_SUCCESS,
        movie
      })
    }
  } catch (err) {
    yield put({
      type: NOMINATE_MOVIE_ERROR
    })
  }
}

export default function* watchNominateMovie() {
  yield takeEvery(NOMINATE_MOVIE, handleNominateMovie);
}

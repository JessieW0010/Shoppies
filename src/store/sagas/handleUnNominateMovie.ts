import { put, takeEvery, call, select } from 'redux-saga/effects';
import { UN_NOMINATE_MOVIE, UN_NOMINATE_MOVIE_SUCCESS, UN_NOMINATE_MOVIE_ERROR } from '../constants';
import { unNominateMovie } from '../../api';
import { IUnNominateMovieResponse, ApplicationState, IMovieInfo } from '../../types';
import { IUnNominateMovie } from '../../types/actionTypes';
import { toast } from 'react-toastify';
export function* handleUnNominateMovie({ 
  movie
}: IUnNominateMovie) {
  try {
    const nominationsPrev = yield select((state: ApplicationState) => state.nominations);
    const notify = () => toast(`Successfully removed nomination for ${movie.Title} (${movie.Year})`);
    const response: IUnNominateMovieResponse = yield call(unNominateMovie, { imdbID: movie.imdbID });
    if (response.status === 200) {
      const nominations = nominationsPrev.filter((nom: IMovieInfo) => movie.imdbID !== nom.imdbID);
      notify();
      yield put({
        type: UN_NOMINATE_MOVIE_SUCCESS,
        nominations
      })
    }
  } catch (err) {
    yield put({
      type: UN_NOMINATE_MOVIE_ERROR
    })
  }
}

export default function* watchUnNominateMovie() {
  yield takeEvery(UN_NOMINATE_MOVIE, handleUnNominateMovie);
}

import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_MOVIE_INFO, GET_MOVIE_INFO_SUCCESS, GET_MOVIE_INFO_ERROR } from '../constants';
import { searchById } from '../../api';
import { ISearchMovieInfoResponse } from '../../types';
import { IGetMovieInfo } from '../../types/actionTypes';
import { toast } from 'react-toastify';
export function* handleGetMovieInfo({ 
  id,
  history
}: IGetMovieInfo) {
  const notify = () => toast.error(`Oops! Something went wrong.`);
  try {
    const response: ISearchMovieInfoResponse = yield call(searchById, { id });
    if (response.status === 200) {
      yield put({
        type: GET_MOVIE_INFO_SUCCESS,
        selectedMovie: response.data.movie
      })
      if (history) { 
        history.push(`/movie/${id}`);
      }
    }
  } catch (err) {
    notify()
    yield put({
      type: GET_MOVIE_INFO_ERROR
    })
  }
}

export default function* watchGetMovieInfo() {
  yield takeEvery(GET_MOVIE_INFO, handleGetMovieInfo);
}

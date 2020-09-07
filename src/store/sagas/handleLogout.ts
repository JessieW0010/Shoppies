import { put, takeEvery } from 'redux-saga/effects';
import { LOGOUT, LOGOUT_SUCCESS } from '../constants';

export function* logout() {
  localStorage.removeItem('jwtToken');
  yield put({
    type: LOGOUT_SUCCESS
  })
}

export default function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

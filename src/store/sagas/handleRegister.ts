import { put, takeEvery, call } from 'redux-saga/effects';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../constants';
import { register } from '../../api';
import { ISignInResponse } from '../../types';
import { IRegister } from '../../types/actionTypes';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export function* handleRegister({ 
  payload,
  history
}: IRegister) {
  try {
    const response: ISignInResponse = yield call(register, payload);
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
      yield put({
        type: REGISTER_SUCCESS,
        user: jwt_decode(token)
      })
      history.push("/");
    }
  } catch (err) {
    yield put({
      type: REGISTER_ERROR,
      status: 409
    })
  }
}

export default function* watchRegister() {
  yield takeEvery(REGISTER, handleRegister);
}

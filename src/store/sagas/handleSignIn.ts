import { put, takeEvery, call } from 'redux-saga/effects';
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../constants';
import { login } from '../../api';
import { ISignInResponse } from '../../types';
import { ISignIn } from '../../types/actionTypes';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export function* handleSignIn({ 
  email,
  password,
  history
}: ISignIn) {
  try {
    const response: ISignInResponse = yield call(login, { email, password });
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
      yield put({
        type: SIGN_IN_SUCCESS,
        user: jwt_decode(token)
      })
      history.push("/")
    }
  } catch (err) {
    yield put({
      type: SIGN_IN_ERROR
    })
  }
}

export default function* watchSignIn() {
  yield takeEvery(SIGN_IN, handleSignIn);
}

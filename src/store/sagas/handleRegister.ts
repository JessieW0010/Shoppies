import { put, takeEvery, call } from 'redux-saga/effects';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../constants';
import { register } from '../../api';
import { IRegisterResponse } from '../../types';
import { IRegister } from '../../types/actionTypes';

export function* handleRegister({ 
  payload
}: IRegister) {
  try {
    const response: IRegisterResponse = yield call(register, payload);
    if (response.status === 200) {
      yield put({
        type: REGISTER_SUCCESS
      })
    }
  } catch (err) {
    yield put({
      type: REGISTER_ERROR
    })
  }
}

export default function* watchRegister() {
  yield takeEvery(REGISTER, handleRegister);
}

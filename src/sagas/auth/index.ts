import { takeEvery, put } from 'redux-saga/effects';
import { sagaActions } from '../actions';
import { login } from '../../reduxs/stores/auth';

function* loginRequest() {
  try {
    yield put(login());
  } catch (error) {
    /* empty */
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.LOGIN_REQUEST, loginRequest);
}

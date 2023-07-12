import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, all } from "redux-saga/effects";
import { sagaActions } from "../actions";
import { login } from "../../redux/stores/auth";

function* loginRequest(params:any) {
    try {
        yield put(login())  
    } catch (error) {
    }
} 

export default function* rootSaga() {
    yield takeEvery(sagaActions.LOGIN_REQUEST, loginRequest);
}
  
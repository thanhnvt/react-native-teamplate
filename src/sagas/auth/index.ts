import { call, takeEvery, put, all } from "redux-saga/effects";

function* logins(params:any) {
    console.log("Login");
} 

export default function* rootSaga() {
    yield all([
        takeEvery('FETCH_DATA_SAGA', logins)
    ])
}
import { takeEvery, put, all } from "redux-saga/effects";
import { login } from "../../redux/stores/auth";

function* loginRequest(params:any) {
    console.log("logins sagas");
    try {
        yield put(login())  
    } catch (error) {
        
    }
} 

export default function* rootSaga() {
    takeEvery('LOGIN_REQUEST', loginRequest)
}
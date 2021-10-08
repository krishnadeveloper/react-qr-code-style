import {call, takeEvery, put, takeLatest} from "redux-saga/effects";

// fetch user saga
// worker function
const userAction = "USER_FETCH"
function* fetchUser(action){
    try {
        // const user = yield call("/users", action.payload.userId);
        yield put({type:`${userAction}_SUCCESS`, user:{}});

    } catch (error) {
        yield put({type:`${userAction}_FAILED`, message:error.message});
    }
}

// watcher function
function* mySaga() {
    yield("USER_FETCH_REQUEST", fetchUser)
}
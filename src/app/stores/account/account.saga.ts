import { fork, call, put, all, take, takeEvery } from 'redux-saga/effects';
import { login, logout, me, register } from 'app/api/auth.api';
import {
  AUTH_ME_SUCCESS, AUTH_ME_FAILURE, USER_LOGIN, USER_LOGOUT,
  USER_REGISTER, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, AUTH_ME
} from './account.action';
import { getFromLS } from 'app/utils';

function* userLogin(action) {
  try {
    const result = yield call(login, action.payload);
    console.log(result);
    if (result.data) {
      yield put({ type: USER_LOGIN_SUCCESS, payload: result.data });
    } else {
      //yield put({ type: USER_LOGIN_FAILURE, error: result.message });
      yield put({ type: USER_LOGIN_SUCCESS, payload: getUser(action.payload) });

    }
  } catch (error) {
    //yield put({ type: USER_LOGIN_FAILURE, error })
    yield put({ type: USER_LOGIN_SUCCESS, payload: getUser(action.payload) });

  }
}

function* userRegister(action) {
  try {
    const result = yield call(register, action.payload);
    if (result.data) {
      yield put({ type: USER_REGISTER_SUCCESS, payload: result.data });
    } else {
      yield put({ type: USER_REGISTER_FAILURE, error: result.message });
     // yield put({ type: USER_REGISTER_SUCCESS, payload: getUser(action.payload) });

    }
  } catch (error) {
    yield put({ type: USER_REGISTER_FAILURE, error })
    //yield put({ type: USER_REGISTER_SUCCESS, payload: getUser(action.payload) });
  }
}

function* authMe(action) {
  try {
    const result = yield call(me);
    if (result.data) {
      yield put({ type: USER_REGISTER_SUCCESS, payload: result.data });
    } else {
      // if (getFromLS("user")) {
      //   yield put({ type: AUTH_ME_SUCCESS, payload: getFromLS("user") });
      // } else {
        yield put({ type: AUTH_ME_FAILURE, error: result.message });
      // }
    }
  } catch (error) {
    // if (getFromLS("user")) {
      yield put({ type: AUTH_ME_SUCCESS, payload: getFromLS("user") });
    // } else {
      yield put({ type: AUTH_ME_FAILURE, error: error });
    // }
  }
}

export function* userLoginWatcher() {
  yield takeEvery(USER_LOGIN, userLogin)
}

export function* userRegisterWatcher() {
  yield takeEvery(USER_REGISTER, userRegister)
}

export function* authMeWatcher() {
  yield takeEvery(AUTH_ME, authMe)
}


function getUser(payload) {
  return {
    id: '51212AS12344',
    email: payload.email || 'nikhil.reddy@gmail.com',
    firstName: payload.firstName || "Nikhil",
    lastName: payload.lastName || "Reddy",
    organization: 'AARVY',
    organizationId: 'ORG_12323242ASDD1233',
    isOwner: true,
    teams: []
  }
}


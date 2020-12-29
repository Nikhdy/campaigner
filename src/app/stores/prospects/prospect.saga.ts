import { fork, call, put, all, takeEvery } from 'redux-saga/effects';
import { fetchProspects, fetchProspectColumns } from '../../api/prospects.api';
import {
  FETCH_PROSPECT, FETCH_PROSPECT_COLUMNS, FETCH_PROSPECTS,
  FETCH_PROSPECT_SUCCESS, FETCH_PROSPECT_COLUMNS_SUCCESS, FETCH_PROSPECTS_SUCCESS,
  FETCH_PROSPECT_ERROR, FETCH_PROSPECT_COLUMNS_ERROR, FETCH_PROSPECTS_ERROR
} from './prospect.action';
import { prospects, prospectColumns } from './prospect.data';
function* getProspects() {
  // const result = yield call(fetchProspects);
  // if (result.status === "SUCCESS") {
  //     yield put({ type: FETCH_PROSPECTS_SUCCESS, payload: result.data });
  // } else {
  //     // yield put({ type: FETCH_PROSPECTS_ERROR, payload: "Failed to load data" });
  //     yield put({ type: FETCH_PROSPECTS_SUCCESS, payload: data });
  // }
  yield put({ type: FETCH_PROSPECTS_SUCCESS, payload: prospects });
}


function* getProspectColumns() {
  yield put({ type: FETCH_PROSPECT_COLUMNS_SUCCESS, payload: prospectColumns });
}





/************ *******************/
/*********  watchers ***********/
/************ *******************/
export function* getProspectsWatcher() {
  yield takeEvery(FETCH_PROSPECTS, getProspects)
}


export function* getProspectColumnWatcher() {
  yield takeEvery(FETCH_PROSPECT_COLUMNS, getProspectColumns)
}


export default function* prospectroot() {
  yield all([getProspectsWatcher(), getProspectColumnWatcher()])
}

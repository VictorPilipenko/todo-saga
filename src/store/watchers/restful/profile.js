import { takeEvery } from "redux-saga/effects";

import { getProfileSaga } from "../../sagas/restful/profile";
import * as TYPES from '../../types/restful'

export default function* profileSaga() {
  yield takeEvery(TYPES.GET_PROFILE_REQUEST, getProfileSaga)
}

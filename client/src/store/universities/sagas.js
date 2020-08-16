import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { UniversityActionTypes } from './types'
import { universitiesSuccess, universitiesFailure } from './actions'

/**
 * Get university list
 */
function* getUniversities(_action) {
  try {
    const response = yield call(getUniversitiesReq)
    yield put(universitiesSuccess(response))
  } catch (e) {
    yield put(universitiesFailure(e))
  }
}

function getUniversitiesReq() {
  const url = '/api/v1/universities'
  return axios.get(url, {})
}

export default [
  takeEvery(UniversityActionTypes.UNIVERSIRY_INDEX_REQUEST, getUniversities),
]

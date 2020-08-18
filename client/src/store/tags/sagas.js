import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { TagActionTypes } from './types'
import { tagsSuccess, tagsFailure } from './actions'

/**
 *  Get tag list
 */
function* getTags(_action) {
  try {
    const response = yield call(getTagsReq)
    yield put(tagsSuccess(response))
  } catch (e) {
    yield put(tagsFailure)
  }
}

const getTagsReq = () => {
  const url = '/api/v1/tags'
  return axios.get(url, {})
}

export default [takeEvery(TagActionTypes.TAG_INDEX_REQUEST, getTags)]

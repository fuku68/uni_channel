import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FeedActionTypes } from './types'
import {
  feedsSuccess,
  feedsFailure,
  feedPostSuccess,
  feedPostFailure,
  feedDeleteSuccess,
  feedDeleteFailure,
} from './actions'

/**
 * Get feed list
 */
function* getFeeds(action) {
  try {
    const response = yield call(getFeedsReq, action.payload)
    yield put(feedsSuccess(response))
  } catch (e) {
    yield put(feedsFailure(e))
  }
}

function getFeedsReq(payload) {
  const { universityId, page } = payload
  let url = `/api/v1/universities/${universityId}/feeds`
  if (page) {
    url += `?page=${page}`
  }
  return axios.get(url, {})
}

/**
 * Post feed
 */
function* postFeed(action) {
  try {
    const response = yield call(postFeedReq, action.payload)
    yield put(feedPostSuccess(response))
  } catch (e) {
    yield put(feedPostFailure(e))
  }
}

function postFeedReq(payload) {
  const { universityId, name, title, tags, content } = payload

  let url = `/api/v1/universities/${universityId}/feeds`
  return axios.post(url, {
    name,
    title,
    tags,
    content,
  })
}

/**
 * Delete feed
 */
function* deleteFeed(action) {
  try {
    const response = yield call(deleteFeedReq, action.payload)
    yield put(feedDeleteSuccess(response))
  } catch (e) {
    yield put(feedDeleteFailure(e))
  }
}

function deleteFeedReq(payload) {
  const { university_id, id } = payload
  const url = `/api/v1/universities/${university_id}/feeds/${id}`
  return axios.delete(url, {})
}

export default [
  takeEvery(FeedActionTypes.FEED_INDEX_REQUEST, getFeeds),
  takeEvery(FeedActionTypes.FEED_POST_REQUEST, postFeed),
  takeEvery(FeedActionTypes.FEED_DELETE_REQUEST, deleteFeed),
]

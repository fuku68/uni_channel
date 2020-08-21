import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { CommentActionTypes } from './types'
import {
  commentsSuccess,
  commentsFailure,
  commentPostSuccess,
  commentPostFailure,
  commentDeleteSuccess,
  commentDeleteFailure,
} from './actions'

/**
 * Get comment list
 */
function* getComments(action) {
  try {
    const response = yield call(getCommentsReq(action.payload))
    yield put(commentsSuccess(response))
  } catch (e) {
    yield put(commentsFailure(e))
  }
}

function getCommentsReq(payload) {
  const { universityId, feedId, page } = payload
  let url = `/api/v1/universities/${universityId}/feeds/${feedId}/comments`
  if (page) {
    url += `?page=${page}`
  }
  return axios.get(url, {})
}

/**
 * Post comment
 */
function* postComment(action) {
  try {
    const response = yield call(postCommentRew(action.payload))
    yield put(commentPostSuccess(response))
  } catch (e) {
    yield put(commentPostFailure(e))
  }
}

function postCommentRew(payload) {
  const { universityId, feedId } = payload
  const url = `/api/v1/universities/${universityId}/feeds/${feedId}/comments`

  return axios.post(url, {})
}

/**
 * Delete comment
 */
function* deleteComment(action) {
  try {
    const response = yield call(deleteCommentReq(action.payload))
    yield put(commentDeleteSuccess(response))
  } catch (e) {
    yield put(commentDeleteFailure(e))
  }
}

function deleteCommentReq(payload) {
  const { universityId, feedId, id } = payload
  const url = `/api/v1/universities/${universityId}/feeds/${feedId}/comments/${id}`

  return axios.delete(url, {})
}

export default [
  takeEvery(CommentActionTypes.COMMENT_INDEX_REQUEST, getComments),
  takeEvery(CommentActionTypes.COMMENT_POST_REQUEST, postComment),
  takeEvery(CommentActionTypes.COMMENT_DELETE_REQUEST, deleteComment),
]

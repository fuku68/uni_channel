import { createAction } from 'redux-actions'
import { CommentActionTypes } from './types'

export const commentsRequest = createAction(
  CommentActionTypes.COMMENT_INDEX_REQUEST
)
export const commentsSuccess = createAction(
  CommentActionTypes.COMMENT_INDEX_SUCCESS
)
export const commentsFailure = createAction(
  CommentActionTypes.COMMENT_INDEX_FAILURE
)
export const commentPostRequest = createAction(
  CommentActionTypes.COMMENT_POST_REQUEST
)
export const commentPostSuccess = createAction(
  CommentActionTypes.COMMENT_POST_SUCCESS
)
export const commentPostFailure = createAction(
  CommentActionTypes.COMMENT_POST_FAILURE
)
export const commentDeleteRequest = createAction(
  CommentActionTypes.COMMENT_DELETE_REQUEST
)
export const commentDeleteSuccess = createAction(
  CommentActionTypes.COMMENT_DELETE_SUCCESS
)
export const commentDeleteFailure = createAction(
  CommentActionTypes.COMMENT_DELETE_FAILURE
)

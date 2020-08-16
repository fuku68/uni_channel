import { createAction } from 'redux-actions'
import { FeedActionTypes } from './types'

export const feedsRequest = createAction(FeedActionTypes.FEED_INDEX_REQUEST)
export const feedsSuccess = createAction(FeedActionTypes.FEED_INDEX_SUCCESS)
export const feedsFailure = createAction(FeedActionTypes.FEED_INDEX_FAILURE)
export const feedPostResuest = createAction(FeedActionTypes.FEED_POST_REQUEST)
export const feedPostSuccess = createAction(FeedActionTypes.FEED_POST_SUCCESS)
export const feedPostFailure = createAction(FeedActionTypes.FEED_POST_FAILURE)
export const feedDeleteRequest = createAction(
  FeedActionTypes.FEED_DELETE_REQUEST
)
export const feedDeleteSuccess = createAction(
  FeedActionTypes.FEED_DELETE_SUCCESS
)
export const feedDeleteFailure = createAction(
  FeedActionTypes.FEED_DELETE_FAILURE
)

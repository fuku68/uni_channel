import { CommentActionTypes } from './types'

const initialState = {
  loading: false,
  posting: false,
  university: {},
  feed: {},
  comments: [],
  pageNum: 0,
  totalPages: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CommentActionTypes.COMMENT_INDEX_REQUEST:
      return { ...state, loading: true }
    case CommentActionTypes.COMMENT_INDEX_SUCCESS: {
      const { data } = action.payload.data
      const { university, feed, comments, pageNum, totalPages } = data
      return {
        ...state,
        loading: false,
        university,
        feed,
        comments,
        pageNum,
        totalPages,
      }
    }
    case CommentActionTypes.COMMENT_INDEX_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}
export { reducer as commentsReducer }

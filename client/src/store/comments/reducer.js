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
      return state
    }
    case CommentActionTypes.COMMENT_INDEX_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}
export { reducer as commentsReducer }

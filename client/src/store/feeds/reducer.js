import { FeedActionTypes } from './types'

const initialState = {
  loading: false,
  posting: false,
  university: {},
  feeds: [],
  pageNum: 0,
  totalPages: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FeedActionTypes.FEED_INDEX_REQUEST:
      return { ...state, loading: true }
    case FeedActionTypes.FEED_INDEX_SUCCESS: {
      return { ...state, loading: false }
    }
    case FeedActionTypes.FEED_INDEX_FAILURE: {
      return { ...state, loading: false }
    }
    default:
      return state
  }
}
export { reducer as feedsReducer }

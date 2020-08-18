import { TagActionTypes } from './types'

const initialState = {
  loading: false,
  tags: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TagActionTypes.TAG_INDEX_REQUEST:
      return { ...state, loading: true }
    case TagActionTypes.TAG_INDEX_SUCCESS: {
      const { data } = action.payload.data
      return { ...state, loading: false, tags: data }
    }
    case TagActionTypes.TAG_INDEX_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}
export { reducer as tagsReducer }

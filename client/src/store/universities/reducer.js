import { UniversityActionTypes } from './types'

const initialState = {
  loading: false,
  universities: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UniversityActionTypes.UNIVERSIRY_INDEX_REQUEST:
      return { ...state, loading: true, universities: [] }
    case UniversityActionTypes.UNIVERSIRY_INDEX_SUCCESS: {
      return state
    }
    case UniversityActionTypes.UNIVERSIRY_INDEX_FAILURE:
      return { ...state, loading: false, universities: [] }
    default:
      return state
  }
}
export { reducer as universitiesReducer }

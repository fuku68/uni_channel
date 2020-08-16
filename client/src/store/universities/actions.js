import { createAction } from 'redux-actions'
import { UniversityActionTypes } from './types'

export const universitiesRequest = createAction(
  UniversityActionTypes.UNIVERSIRY_INDEX_REQUEST
)
export const universitiesSuccess = createAction(
  UniversityActionTypes.UNIVERSIRY_INDEX_SUCCESS
)
export const universitiesFailure = createAction(
  UniversityActionTypes.UNIVERSIRY_INDEX_FAILURE
)

import { createAction } from 'redux-actions'
import { TagActionTypes } from './types'

export const tagsRequest = createAction(TagActionTypes.TAG_INDEX_REQUEST)
export const tagsSuccess = createAction(TagActionTypes.TAG_INDEX_SUCCESS)
export const tagsFailure = createAction(TagActionTypes.TAG_INDEX_FAILURE)

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects'

// reducers
import { universitiesReducer } from './universities/reducer'
import { tagsReducer } from './tags/reducer'
import { feedsReducer } from './feeds/reducer'
import { commentsReducer } from './comments/reducer'

// sagas
import universitiesSage from './universities/sagas'
import tagsSage from './tags/sagas'
import feedsSage from './feeds/sagas'
import commentsSage from './comments/sagas'

export const createRootReducer = (history) =>
  combineReducers({
    universities: universitiesReducer,
    tags: tagsReducer,
    feeds: feedsReducer,
    comments: commentsReducer,
    router: connectRouter(history),
  })

// sagas
export function* rootSaga() {
  yield all([...universitiesSage, ...tagsSage, ...feedsSage, ...commentsSage])
}

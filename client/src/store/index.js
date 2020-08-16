import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects'

// reducers
import { universitiesReducer } from './universities/reducer'

// sagas
import universitiesSage from './universities/sagas'

export const createRootReducer = (history) =>
  combineReducers({
    universities: universitiesReducer,
    router: connectRouter(history),
  })

// sagas
export function* rootSaga() {
  yield all([...universitiesSage])
}

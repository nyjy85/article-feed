import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Map } from 'immutable'
import { apiMiddleware } from 'redux-api-middleware'

import feedReducer from './components/Feed/feedReducer'

const stateTransformer = (state) => {
  return Map(state).toJS();
}
const loggerMiddleware = createLogger({
  stateTransformer
})

const reducer = combineReducers({
  feed: feedReducer
})


export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
}

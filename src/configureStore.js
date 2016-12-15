import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Map } from 'immutable'
import { apiMiddleware } from 'redux-api-middleware'

// import dataProcessingMiddleware from './utils/dataProcessingMiddleware'

const stateTransformer = (state) => {
  return Map(state).toJS();
}
const loggerMiddleware = createLogger({
  stateTransformer
})

const reducer = combineReducers({
  // zipcodes: zipcodeReducer,
  // map: mapReducer
})


export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggerMiddleware,
      // dataProcessingMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
}

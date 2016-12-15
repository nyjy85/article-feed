import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import initialState from './initialState'
import configureStore from './configureStore'

import App from './components/App'

// import 'babel-polyfill'

const store = configureStore(initialState)

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
)

const reactRoot = document.getElementById('app')
ReactDOM.render(provider, reactRoot)

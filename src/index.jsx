import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import appRoutes from './routes'
import initialState from './initialState'
import configureStore from './configureStore'

// import 'babel-polyfill'

const store = configureStore(initialState)

const provider = (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      {appRoutes()}
    </Router>
  </Provider>
)

const reactRoot = document.getElementById('app')
ReactDOM.render(provider, reactRoot)

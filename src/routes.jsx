import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import ArticlePage from './pages/ArticlePage'
import FeedPage from './pages/FeedPage'


export default function appRoutes () {
  return (
    <Route component={App}>
      <Route path='/' component={FeedPage} />
      <Route path='/articles/:articleId' component={ArticlePage} />
    </Route>
  )
}

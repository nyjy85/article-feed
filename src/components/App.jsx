import React from 'react'
import { connect } from 'react-redux'

import {getArticles} from './Feed/feedActions'
import './app.scss'

export class App extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.getArticles()
  }

  render () {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {}
}

export default connect(
  mapStateToProps,
  {getArticles}
)(App)

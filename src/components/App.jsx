import React from 'react'
import { connect } from 'react-redux'

import './app.scss'

export class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='container'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

function mapStateToProps(state = {}) {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(App)

import React from 'react'
import { connect } from 'react-redux'

import Feed from '../components/Feed/Feed'

export class FeedPage extends React.Component {

  render () {
    return (
      <Feed articles={this.props.articles} />
    )
  }
}

function mapStateToProps(state = {}) {
  return {
    articles: state.feed.get('articles')
  }
}


export default connect(
  mapStateToProps
)(FeedPage)

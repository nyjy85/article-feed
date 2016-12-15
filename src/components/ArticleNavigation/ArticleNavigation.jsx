import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { hashHistory } from 'react-router'

import './articleNavigation.scss'

export default class ArticleNavigation extends React.Component {

  navigate (path) {
    hashHistory.push(path)
  }
  render () {
    return (
      <div className='navigation-container'>
        {this.props.previousArticleId
          ? <button onClick={(path) => this.navigate(`articles/${this.props.previousArticleId}`)}>Previous</button>
          : null
        }
        <button onClick={(path) => this.navigate('/')}>Back to Feed</button>
        {this.props.nextArticleId
          ? <button onClick={(path) => this.navigate(`articles/${this.props.nextArticleId}`)}>Next</button>
          : null
        }
      </div>
    )
  }
}

ArticleNavigation.propTypes = {
  previousArticleId: React.PropTypes.string,
  nextArticleId: React.PropTypes.string
}

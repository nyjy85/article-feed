import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import ArticleSummary from '../ArticleSummary/ArticleSummary'

import './feed.scss'

export default class Feed extends React.Component {

  render () {
    return (
      <div className="feed-module">
        {
          this.props.articles.valueSeq().map(article =>
            <ArticleSummary
              key={article.get('id')}
              image={article.get('image')}
              id={article.get('id')}
              title={article.get('title')}
              authorName={article.getIn(['author', 'name'])} />
          )
        }
      </div>
    )
  }
}

Feed.propTypes = {
  articles: ImmutablePropTypes.map.isRequired
}


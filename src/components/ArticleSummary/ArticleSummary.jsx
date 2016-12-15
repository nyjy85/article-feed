import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

export default class ArticleSummary extends React.Component {

  render () {
    return (
      <div className="article-summary-module">
        <img className="article-summary-img" src={this.props.image} />
        <h4 className="article-summary-title">
          <a href={`#/articles/${this.props.id}`}>{this.props.title}</a>
        </h4>
        <p>{this.props.authorName}</p>
      </div>

    )
  }
}

ArticleSummary.propTypes = {
  image: React.PropTypes.string,
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  authorName: React.PropTypes.string
}

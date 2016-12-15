import React from 'react'
import { connect } from 'react-redux'

import Article from '../components/Article/Article'
import ArticleNavigation from '../components/ArticleNavigation/ArticleNavigation'
import {submitArticleChanges} from '../components/Feed/feedActions'

export class ArticlePage extends React.Component {

  render () {
    var keys = this.props.articles.keySeq()
    var currentArticleIdx = keys.findIndex(val => val === this.props.params.articleId)
    var previousArticleId = currentArticleIdx === 0 ? undefined : keys.get(currentArticleIdx - 1)
    var nextArticleId = keys.get(currentArticleIdx + 1)

    return (
      <div className='row'>
      {
        this.props.articles.get('isLoading') || !this.props.article
        ? <h3>LOADING...</h3>
        : <Article
              articleId={this.props.article.get('id')}
              title={this.props.article.get('title')}
              body={this.props.article.get('body')}
              author={this.props.article.getIn(['author', 'name'])}
              publishDate={this.props.article.get('publishDate')}
              image={this.props.article.get('image')}
              submitChanges={this.props.submitArticleChanges} />
      }
      <ArticleNavigation
        previousArticleId={previousArticleId}
        nextArticleId={nextArticleId} />
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    article: state.feed.getIn(['articles', props.params.articleId]),
    articles: state.feed.get('articles')
  }
}

export default connect(
  mapStateToProps,
  {submitArticleChanges}
)(ArticlePage)

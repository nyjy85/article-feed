import React from 'react'

import {fullDate} from '../../utils/momentDateFormats'
import './article.scss'

export default class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
      body: props.body,
      showEditor: {
        title: false,
        body: false
      }
    }
  }

  edit (attr) {
    this.toggleEditor(attr)
  }

  submitChanges (attr) {
    this.toggleEditor(attr)
    this.props.submitChanges(this.props.articleId, attr, this.state[attr])
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value})
  }

  handleBodyChange (event) {
    this.setState({body: event.target.value})
  }

  toggleEditor (attr) {
    var editor = this.state.showEditor
    editor[attr] = !this.state.showEditor[attr]
    this.setState({showEditor: editor})
  }

  render () {
    return (
      <div className='article-container'>
        {this.state.showEditor.title
          ? <div className='title-edit'>
              <input
                value={this.state.title}
                onChange={(e) => this.handleTitleChange(e)} />
                <span className='edit-actions' onClick={(attr) => this.submitChanges('title')}>Done</span>
            </div>
          : (
            <div className='title-edit'>
              <h3>{this.props.title}</h3>
              <span className='edit-actions' onClick={(attr) => this.edit('title')}>Edit</span>
            </div>
          )
        }
        <div className='author-date'>
          <p>by {this.props.author}</p>
          <p>{fullDate(this.props.publishDate)}</p>
        </div>
        <img src={this.props.image} />
        {this.state.showEditor.body
          ? <div className='article-content'>
              <p className='edit-actions' onClick={(attr) => this.submitChanges('body')}>Done</p>
              <textarea rows='30' value={this.state.body} onChange={(e) => this.handleBodyChange(e)} />
            </div>
          : <div className='article-content'>
              <p className='edit-actions' onClick={(attr) => this.edit('body')}>Edit</p>
              <div dangerouslySetInnerHTML={{ __html: this.props.body}} />
            </div>
        }

      </div>
    )
  }
}

Article.propTypes = {
  articleId: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  publishDate: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  submitChanges: React.PropTypes.func.isRequired
}

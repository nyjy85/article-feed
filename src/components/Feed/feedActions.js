import { CALL_API } from 'redux-api-middleware'
import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  EDIT_ARTICLE
} from '../../utils/constants'


export function getArticles () {
  return {
    [CALL_API]: {
      endpoint: 'https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json',
      method: 'GET',
      types: [
        GET_ARTICLES_REQUEST,
        GET_ARTICLES_SUCCESS,
        GET_ARTICLES_FAILURE
      ],
      bailout: (state) => {
        return !!(state.feed.get('articles').size > 0)
      }
    }
  }
}

export function submitArticleChanges (articleId, attr, changes) {
  return{
    type: EDIT_ARTICLE,
    articleId,
    attr,
    changes
  }
}

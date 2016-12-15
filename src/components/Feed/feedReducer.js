import { Map, fromJS } from 'immutable'
import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  EDIT_ARTICLE
} from '../../utils/constants'

export default function(state = Map(), action) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return state.set('isLoading', true)
    case GET_ARTICLES_SUCCESS:
      action.payload.map(article => { state = state.setIn(['articles', article.id], fromJS(article)) })
      return state.set('isLoading', false)
    case GET_ARTICLES_FAILURE:
      return state.set('isLoading', false)
    case EDIT_ARTICLE:
      return state.setIn(['articles', action.articleId, action.attr], action.changes)
  }
  return state
}

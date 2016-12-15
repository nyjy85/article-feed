import { fromJS } from 'immutable'

export const initialArticlesState = fromJS({
  isLoading: false
})

export const initialState = {
	articles: initialArticlesState
}

export default initialState

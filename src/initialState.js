import { fromJS } from 'immutable'

export const initialfeedState = fromJS({
  isLoading: false,
  articles: {}
})

export const initialState = {
	feed: initialfeedState
}

export default initialState

import {GET_ZIPCODE_SUCCESS} from './constants'

export default store => next => action => {
  if (action.type === GET_ZIPCODE_SUCCESS) {
    action.payload.rows = action.payload.rows.reduce(function(a, b) {
      return a.concat(b);
    }, [])
  }
  return next(action)
}

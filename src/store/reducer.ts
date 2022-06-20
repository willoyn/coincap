import { AppActions } from '../types/store/AppActions'
import { AppState } from '../types/store/AppState'

export default (state: AppState, action: AppActions) => {
  switch (action.type) {
    case 'SET_IS_FETCHING_TRUE':
      return {
        ...state,
        isFetching: true,
      }
    case 'SET_IS_FETCHING_FALSE':
      return {
        ...state,
        isFetching: false,
      }
    default:
      console.log('reducer default case')
      return state
  }
}

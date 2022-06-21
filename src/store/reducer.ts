import { AssetsItem } from '../types/api/AssetsResponse'
import { AppActions } from '../types/store/AppActions'
import { AppState } from '../types/store/AppState'

export default (state: AppState, action: AppActions) => {
  switch (action.type) {
    case 'SET_CURRENCIES_DATA': {
      const stateCopy = { ...state }
      action.payload.data.forEach((item: AssetsItem) => {
        stateCopy.currencies.data.push(item)
      })
      stateCopy.currencies.isError = false
      return stateCopy
    }
    case 'SET_CURRENCIES_FETCHING_ERROR': {
      const stateCopy = { ...state }
      stateCopy.currencies.isError = true
      stateCopy.currencies.error = action.payload
      return stateCopy
    }
    case 'SET_CURRENCIES_IS_FETCHING_FALSE': {
      const stateCopy = { ...state }
      stateCopy.currencies.isFetching = false
      return stateCopy
    }
    case 'SET_CURRENCIES_IS_FETCHING_TRUE': {
      const stateCopy = { ...state }
      stateCopy.currencies.isFetching = true
      return stateCopy
    }
    default:
      console.log('reducer default case')
      return state
  }
}
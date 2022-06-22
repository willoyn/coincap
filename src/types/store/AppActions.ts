import { AssetsResponse } from '../api/AssetsResponse'

export type AppActions =
  | { type: 'SET_CURRENCIES_DATA'; payload: AssetsResponse }
  | { type: 'SET_CURRENCIES_IS_FETCHING_TRUE' }
  | { type: 'SET_CURRENCIES_IS_FETCHING_FALSE' }
  | { type: 'SET_CURRENCIES_FETCHING_ERROR'; payload: string }

import { AssetsResponse } from '../api/AssetsResponse'
import { AssetHistoryResponse } from '../api/AssetsHistoryResponse'
import { AssetsHistoryInterval } from '../api/AssetsHistoryRequest'

export type SetCurrencyHistoryPayload = {
  data: AssetHistoryResponse
  currencyId: string
  historyInterval: AssetsHistoryInterval
}

export type AppActions =
  | { type: 'SET_CURRENCIES_DATA'; payload: AssetsResponse }
  | { type: 'SET_CURRENCIES_IS_FETCHING_TRUE' }
  | { type: 'SET_CURRENCIES_IS_FETCHING_FALSE' }
  | { type: 'SET_CURRENCIES_FETCHING_ERROR'; payload: string }
  | { type: 'SET_CURRENCY_HISTORY_DATA'; payload: SetCurrencyHistoryPayload }
  | { type: 'SET_CURRENCY_HISTORY_IS_FETCHING_TRUE' }
  | { type: 'SET_CURRENCY_HISTORY_IS_FETCHING_FALSE' }
  | { type: 'SET_CURRENCY_HISTORY_FETCHING_ERROR'; payload: string }
  | { type: 'SET_PORTFOLIO_LIST_IS_LOADING_TRUE' }
  | { type: 'SET_PORTFOLIO_LIST_IS_LOADING_FALSE' }
  | { type: 'SET_PORTFOLIO_LAST_UPDATED_TIMESTAMP' }

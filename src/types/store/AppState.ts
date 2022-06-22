import { Assets } from '../api/AssetsResponse'
import { AssetHistory } from '../api/AssetsHistoryResponse'
import { AssetsHistoryInterval } from '../api/AssetsHistoryRequest'

export type AssetsHistory = Array<AssetsHistoryItem>

export type AssetsHistoryItem = {
  currencyId: string
  historyInterval: AssetsHistoryInterval
  data: AssetHistory
}

export type AppState = {
  currencies: {
    data: Assets | any[]
    isFetching: boolean
    error: string | null
    isError: boolean
  }
  currenciesHistory: {
    data: AssetsHistory | any[]
    isFetching: boolean
    error: string | null
    isError: boolean
  }
}

import { Assets } from '../api/AssetsResponse'
import { AssetHistory } from '../api/AssetsHistoryResponse'
import { AssetsHistoryInterval } from '../api/AssetsHistoryRequest'

export type AssetsHistory = Array<AssetsHistoryItem>

export type AssetsHistoryItem = {
  currencyId: string
  historyInterval: AssetsHistoryInterval
  data: AssetHistory
}

export type PortfolioList = Array<PortfolioListItem>

export type PortfolioListItem = {
  id: string
  name: string
  currencyValue: number
  currencyValueInUsdWhenAdded: number
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
  portfolio: {
    isLoading: boolean
    timestampWhenLastUpdated?: number
  }
}

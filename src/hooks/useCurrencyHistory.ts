import { useCallback, useContext, useEffect, useState } from 'react'

import { assetsEndpoint } from '../api/assets'
import { AppContext } from '../store'
import { AssetsHistoryInterval } from '../types/api/AssetsHistoryRequest'

import {
  AssetHistory,
  AssetHistoryResponse,
} from '../types/api/AssetsHistoryResponse'
import { SetCurrencyHistoryPayload } from '../types/store/AppActions'
import { AssetsHistoryItem } from '../types/store/AppState'

const useCurrencyHistory = (id: string, interval: AssetsHistoryInterval) => {
  const { state, dispatch } = useContext(AppContext)
  const [currencyHistory, setCurrencyHistory] = useState<AssetHistory>([])

  const cachedItemIndex = state.currenciesHistory.data.findIndex(
    (item: AssetsHistoryItem) =>
      item.currencyId === id && item.historyInterval === interval,
  )

  const fetcher = () => {
    dispatch({ type: 'SET_CURRENCY_HISTORY_IS_FETCHING_TRUE' })
    fetch(`${assetsEndpoint}/${id}/history?interval=${interval}`)
      .then(response => response.json())
      .then((responseData: AssetHistoryResponse) => {
        const payload: SetCurrencyHistoryPayload = {
          data: responseData,
          currencyId: id,
          historyInterval: interval,
        }
        dispatch({ type: 'SET_CURRENCY_HISTORY_DATA', payload })
        setCurrencyHistory(responseData.data)
      })
      .catch(error => {
        dispatch({
          type: 'SET_CURRENCY_HISTORY_FETCHING_ERROR',
          payload: error.toString(),
        })
      })
      .finally(() => {
        dispatch({ type: 'SET_CURRENCY_HISTORY_IS_FETCHING_FALSE' })
      })
  }

  const fetcherCallback = useCallback(fetcher, [id, interval, dispatch])

  useEffect(() => {
    if (cachedItemIndex === -1) {
      fetcherCallback()
    } else {
      setCurrencyHistory(state.currenciesHistory.data[cachedItemIndex].data)
    }
  }, [
    id,
    interval,
    fetcherCallback,
    cachedItemIndex,
    state.currenciesHistory.data,
  ])

  return currencyHistory
}

export default useCurrencyHistory

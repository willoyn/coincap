import { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { ASSET_HISTORY } from '../api/gql'
import { AppContext } from '../store'

import {
  AssetHistory,
  AssetHistoryApolloResponse,
} from '../types/api/AssetsHistoryResponse'
import { SetCurrencyHistoryPayload } from '../types/store/AppActions'
import { AssetsHistoryInterval } from '../types/api/AssetsHistoryRequest'

const useCurrencyHistory = (id: string, interval: AssetsHistoryInterval) => {
  const { dispatch } = useContext(AppContext)
  const [currencyHistory, setCurrencyHistory] = useState<AssetHistory>([])

  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<AssetHistoryApolloResponse>(ASSET_HISTORY, {
    variables: { id, interval },
  })

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: 'SET_CURRENCY_HISTORY_IS_FETCHING_TRUE' })
    } else {
      dispatch({ type: 'SET_CURRENCY_HISTORY_IS_FETCHING_FALSE' })
    }
  }, [isLoading, dispatch])

  useEffect(() => {
    if (error) {
      dispatch({
        type: 'SET_CURRENCY_HISTORY_FETCHING_ERROR',
        payload: error.toString(),
      })
    }
  }, [error, dispatch])

  useEffect(() => {
    if (data) {
      const payload: SetCurrencyHistoryPayload = {
        data: data.getAssetHistory,
        currencyId: id,
        historyInterval: interval,
      }
      dispatch({ type: 'SET_CURRENCY_HISTORY_DATA', payload })
      setCurrencyHistory(data.getAssetHistory)
    }
  }, [data, dispatch, id, interval])

  return currencyHistory
}

export default useCurrencyHistory

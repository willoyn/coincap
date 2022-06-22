import { useEffect, useContext, useCallback } from 'react'

import { AppContext } from '../store'
import { assetsEndpoint } from '../api/assets'

import { AssetsResponse } from '../types/api/AssetsResponse'

const useCurrencies = (offset: number, limit = 10) => {
  const { state, dispatch } = useContext(AppContext)

  const fetcher = () => {
    dispatch({ type: 'SET_CURRENCIES_IS_FETCHING_TRUE' })
    fetch(`${assetsEndpoint}?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then((responseData: AssetsResponse) =>
        dispatch({ type: 'SET_CURRENCIES_DATA', payload: responseData }),
      )
      .catch(error => {
        dispatch({
          type: 'SET_CURRENCIES_FETCHING_ERROR',
          payload: error.toString(),
        })
      })
      .finally(() => {
        dispatch({ type: 'SET_CURRENCIES_IS_FETCHING_FALSE' })
      })
  }

  const fetcherCallback = useCallback(fetcher, [offset, limit, dispatch])

  useEffect(() => {
    fetcherCallback()
  }, [offset, limit, fetcherCallback])

  return state.currencies.data
}

export default useCurrencies

import { useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { AppContext } from '../store'
import { ASSETS } from '../api/gql'

import { AssetsApolloResponse } from '../types/api/AssetsResponse'

const useCurrencies = (offset: number, limit = 10) => {
  const { state, dispatch } = useContext(AppContext)

  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<AssetsApolloResponse>(ASSETS, { variables: { offset, limit } })

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'SET_CURRENCIES_DATA',
        payload: {
          data: data.getAssets,
        },
      })
    }
  }, [data, dispatch])

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: 'SET_CURRENCIES_IS_FETCHING_TRUE' })
    } else {
      dispatch({ type: 'SET_CURRENCIES_IS_FETCHING_FALSE' })
    }
  }, [isLoading, dispatch])

  useEffect(() => {
    if (error) {
      dispatch({
        type: 'SET_CURRENCIES_FETCHING_ERROR',
        payload: error.toString(),
      })
    }
  }, [error, dispatch])

  return state.currencies.data
}

export default useCurrencies

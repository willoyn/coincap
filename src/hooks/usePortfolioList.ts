import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store'

import getItem from '../storage/api/getItem'

import { PortfolioList } from '../types/store/AppState'
import { portfolioListKey } from '../storage/keys'

const usePortfolioList = () => {
  const {
    state: {
      portfolio: { timestampWhenLastUpdated },
    },
    dispatch,
  } = useContext(AppContext)
  const [list, setList] = useState<PortfolioList>([])

  useEffect(() => {
    dispatch({ type: 'SET_PORTFOLIO_LIST_IS_LOADING_TRUE' })
    getItem(portfolioListKey)
      .then((data: PortfolioList) => {
        if (data) {
          setList(data)
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch({ type: 'SET_PORTFOLIO_LIST_IS_LOADING_FALSE' })
      })
  }, [timestampWhenLastUpdated, dispatch])

  return list
}

export default usePortfolioList

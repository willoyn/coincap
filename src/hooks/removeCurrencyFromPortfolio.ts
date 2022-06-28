import { portfolioListKey } from '../storage/keys'
import getItem from '../storage/api/getItem'
import setItem from '../storage/api/setItem'

import { PortfolioList } from '../types/store/AppState'
import { AppDispatch } from '../store'

export default (id: string, dispatch: AppDispatch) => {
  getItem(portfolioListKey)
    .then((portfolioList: PortfolioList) => {
      const filteredList = portfolioList.filter(item => item.id !== id)
      setItem(filteredList, portfolioListKey).then(() =>
        dispatch({ type: 'SET_PORTFOLIO_LAST_UPDATED_TIMESTAMP' }),
      )
    })
    .catch(error => console.log(error))
}

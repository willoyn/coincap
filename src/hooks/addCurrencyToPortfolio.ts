import { portfolioListKey } from '../storage/keys'
import getItem from '../storage/api/getItem'
import setItem from '../storage/api/setItem'

import { AssetsItem } from '../types/api/AssetsResponse'
import { PortfolioList, PortfolioListItem } from '../types/store/AppState'
import { AppDispatch } from '../store'

export default async (
  currency: AssetsItem,
  value: number,
  dispatch: AppDispatch,
) => {
  const { id, priceUsd, name } = currency
  const getAlreadyAddedCurrencyIndex = (
    currencyId: string,
    list: PortfolioList,
  ) => list.findIndex(item => item.id === currencyId)

  getItem(portfolioListKey)
    .then((portfolioList: PortfolioList) => {
      const newPortfolioListItem: PortfolioListItem = {
        id,
        name,
        currencyValue: value,
        currencyValueInUsdWhenAdded: value * Number(priceUsd),
      }
      if (portfolioList === null) {
        setItem([newPortfolioListItem], portfolioListKey)
      } else {
        const index = getAlreadyAddedCurrencyIndex(id, portfolioList)
        if (index !== -1) {
          const summaryCurrencyValue =
            value + portfolioList[index].currencyValue
          newPortfolioListItem.currencyValue = summaryCurrencyValue
          newPortfolioListItem.currencyValueInUsdWhenAdded =
            summaryCurrencyValue * Number(priceUsd)
          // eslint-disable-next-line no-param-reassign
          portfolioList[index] = newPortfolioListItem
        } else {
          portfolioList.push(newPortfolioListItem)
        }
        setItem(portfolioList, portfolioListKey).then(() => {
          dispatch({ type: 'SET_PORTFOLIO_LAST_UPDATED_TIMESTAMP' })
        })
      }
    })
    .catch(error => console.log(error))
}

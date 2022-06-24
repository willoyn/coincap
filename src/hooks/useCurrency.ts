import { useContext } from 'react'
import { AppContext } from '../store'

import { AssetsItem } from '../types/api/AssetsResponse'

const useCurrency = (id: string) => {
  const { state } = useContext(AppContext)

  const currency: AssetsItem = state.currencies.data.find(
    (item: AssetsItem) => item.id === id,
  )

  return currency
}

export default useCurrency

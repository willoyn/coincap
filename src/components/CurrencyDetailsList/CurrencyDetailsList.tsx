import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import getLocaleString from '../../hooks/getLocaleString'
import useCurrency from '../../hooks/useCurrency'

import { AssetsItem } from '../../types/api/AssetsResponse'
import CurrencyDetailsListItem from './CurrencyDetailsListItem'

type Props = {
  id: string
}

const roundDecimal = (decimal: string, digits: number) =>
  `${Number(decimal).toFixed(digits)}`

const CurrencyDetailsList = ({ id }: Props) => {
  const {
    changePercent24Hr,
    marketCapUsd,
    maxSupply,
    priceUsd,
    supply,
    volumeUsd24Hr,
    vwap24Hr,
  }: AssetsItem = useCurrency(id)

  const changeInPercent = `${roundDecimal(changePercent24Hr, 3)}%`
  const capitalization = getLocaleString(marketCapUsd, true)
  const maximumSupply = maxSupply
    ? getLocaleString(`${Math.round(Number(maxSupply))}`, false)
    : null
  const priceInUsd = `$${roundDecimal(priceUsd, 3)}`
  const supplyValue = getLocaleString(supply, false)
  const volumeUsd = getLocaleString(volumeUsd24Hr, true)
  const vwap24HrValue = getLocaleString(vwap24Hr, true)

  return (
    <View style={styles.list}>
      <CurrencyDetailsListItem title="Capitalization" value={capitalization} />
      <CurrencyDetailsListItem title="Price" value={priceInUsd} />
      <CurrencyDetailsListItem
        title="Change in last 24 hours"
        value={changeInPercent}
      />
      <CurrencyDetailsListItem title="Supply" value={supplyValue} />
      {maximumSupply ? (
        <CurrencyDetailsListItem title="Maximum supply" value={maximumSupply} />
      ) : null}
      <CurrencyDetailsListItem
        title="Trading volume in last 24 hours"
        value={volumeUsd}
      />
      <CurrencyDetailsListItem
        title="Volume weighted average in last 24 hours"
        value={vwap24HrValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    marginBottom: hp(2),
  },
})

export default CurrencyDetailsList

import React, { useContext } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import useCurrencyHistory from '../../hooks/useCurrencyHistory'
import { AppContext } from '../../store'

import { CurrencyNavigationProps } from '../../types/Navigation'

const Currency = ({
  route: {
    params: { id, name },
  },
}: CurrencyNavigationProps) => {
  const {
    state: {
      currenciesHistory: { isFetching },
    },
  } = useContext(AppContext)
  const currencyHistory = useCurrencyHistory(id, 'd1')

  return (
    <SafeAreaView style={styles.screen}>
      <Text>{name} currency screen</Text>
      {currencyHistory.length ? (
        <>
          <Text>time {currencyHistory[0].time}</Text>
          <Text>price {currencyHistory[0].priceUsd}</Text>
          <Text>time {currencyHistory[1].time}</Text>
          <Text>price {currencyHistory[1].priceUsd}</Text>
        </>
      ) : (
        <Text>isFetching: {String(isFetching)}</Text>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Currency

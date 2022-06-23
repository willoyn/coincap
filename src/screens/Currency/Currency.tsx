import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import CurrencyHistoryGraph from '../../components/CurrencyHistoryGraph/CurrencyHistoryGraph'
import CustomLoader from '../../components/CustomLoader/CustomLoader'

import useCurrencyHistory from '../../hooks/useCurrencyHistory'

import { CurrencyNavigationProps } from '../../types/Navigation'

const Currency = ({
  route: {
    params: { id },
  },
}: CurrencyNavigationProps) => {
  const currencyHistory = useCurrencyHistory(id, 'd1')

  return (
    <SafeAreaView style={styles.screen}>
      {currencyHistory.length ? (
        <CurrencyHistoryGraph history={currencyHistory} />
      ) : (
        <CustomLoader />
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

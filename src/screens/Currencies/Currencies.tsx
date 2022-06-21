import React, { useContext } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import useCurrencies from '../../hooks/useCurrencies'

import { AppContext } from '../../store'

const Currencies = () => {
  const { state } = useContext(AppContext)
  const currencies = useCurrencies(0)
  return (
    <SafeAreaView style={styles.screen}>
      <Text>{`isError: ${state.currencies.isError}`}</Text>
      <Text>{`isFetching: ${state.currencies.isFetching}`}</Text>
      {currencies.length ? (
        <Text>{`Top currency name: ${currencies[0].name}`}</Text>
      ) : null}
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

export default Currencies

import React, { useContext } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import CurrenciesListItem from '../../components/CurrenciesListItem/CurrenciesListItem'

import useCurrencies from '../../hooks/useCurrencies'

import { AppContext } from '../../store'

const Currencies = () => {
  const { state } = useContext(AppContext)
  const currencies = useCurrencies(0)

  const onItemPress = () => {
    console.log('item was pressed')
  }

  const onAddItemPress = () => {
    console.log('add item button was pressed')
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text>{`isError: ${state.currencies.isError}`}</Text>
      <Text>{`isFetching: ${state.currencies.isFetching}`}</Text>
      {currencies.length ? (
        <View style={styles.list}>
          <CurrenciesListItem
            data={currencies[0]}
            onItemPress={onItemPress}
            onAddItemPress={onAddItemPress}
          />
          <CurrenciesListItem
            data={currencies[1]}
            onItemPress={onItemPress}
            onAddItemPress={onAddItemPress}
          />
        </View>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e4e2',
  },
  list: {
    width: wp(90),
  },
})

export default Currencies

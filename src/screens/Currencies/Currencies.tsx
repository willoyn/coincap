import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import CurrenciesList from '../../components/CurrenciesList/CurrenciesList'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar'

import useCurrencies from '../../hooks/useCurrencies'

const Currencies = () => {
  const currencies = useCurrencies(0)

  const onItemPress = () => {
    console.log('item was pressed')
  }

  const onAddItemPress = () => {
    console.log('add item button was pressed')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomStatusBar />
      <View style={styles.screen}>
        {currencies.length ? (
          <CurrenciesList
            data={currencies}
            onItemPressed={onItemPress}
            onAddItemPressed={onAddItemPress}
          />
        ) : (
          <CustomLoader />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e5e4e2',
  },
  screen: {
    backgroundColor: '#e5e4e2',
    paddingTop: hp(2),
  },
})

export default Currencies

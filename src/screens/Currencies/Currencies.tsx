import React from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'

import { CurrenciesNavigationProps } from '../../types/Navigation'

const Currencies = ({ navigation }: CurrenciesNavigationProps) => {
  const onNavigateToCurrency = () => {
    navigation.navigate('Currency')
  }

  const onNavigateToAddCurrency = () => {
    navigation.navigate('AddCurrency')
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text>Currencies screen</Text>
      <Button onPress={onNavigateToCurrency} title="go to Currency screen" />
      <Button
        onPress={onNavigateToAddCurrency}
        title="go to AddCurrency screen"
      />
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

import React from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'

import { AddCurrencyNavigationProps } from '../../types/Navigation'

const AddCurrency = ({ navigation }: AddCurrencyNavigationProps) => {
  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text>AddCurrency screen</Text>
      <Button onPress={onPress} title="go back" />
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

export default AddCurrency

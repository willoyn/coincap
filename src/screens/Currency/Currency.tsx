import React from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'

import { CurrencyNavigationProps } from '../../types/Navigation'

const Currency = ({ navigation }: CurrencyNavigationProps) => {
  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Currency screen</Text>
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

export default Currency

import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { CurrencyNavigationProps } from '../../types/Navigation'

const Currency = ({
  route: {
    params: { name },
  },
}: CurrencyNavigationProps) => (
  <SafeAreaView style={styles.screen}>
    <Text>{name} currency screen</Text>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Currency

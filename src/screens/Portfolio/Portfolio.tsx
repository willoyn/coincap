import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Portfolio = () => (
  <SafeAreaView style={styles.screen}>
    <Text>Portfolio screen</Text>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Portfolio

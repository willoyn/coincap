import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const CustomLoader = () => (
  <ActivityIndicator size="large" style={styles.loader} />
)

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
})

export default CustomLoader

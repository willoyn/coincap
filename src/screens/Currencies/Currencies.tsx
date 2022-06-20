import React, { useContext } from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'

import { AppContext } from '../../store'

const Currencies = () => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Currencies screen</Text>
      <Text>{`current value: ${state.isFetching}`}</Text>
      <Button
        title="set to true"
        onPress={() => dispatch({ type: 'SET_IS_FETCHING_TRUE' })}
      />
      <Button
        title="set to false"
        onPress={() => dispatch({ type: 'SET_IS_FETCHING_FALSE' })}
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

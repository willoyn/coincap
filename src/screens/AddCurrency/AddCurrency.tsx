import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, TextInput, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import PressableText from '../../components/PressableText/PressableText'

import getLocaleString from '../../hooks/getLocaleString'
import useCurrency from '../../hooks/useCurrency'

import { AddCurrencyNavigationProps } from '../../types/Navigation'

const AddCurrency = ({
  route: {
    params: { id },
  },
}: AddCurrencyNavigationProps) => {
  const [additionalCurrency, setAdditionalCurrency] = useState('')
  const { symbol, priceUsd } = useCurrency(id)

  // eslint-disable-next-line no-useless-escape
  const additionalCurrencyRegExp = /[^0-9|\.]|^\.|\.{2,}|\.[0-9]{1,}\./m
  const onChangeText = (text: string) =>
    setAdditionalCurrency(text.replace(additionalCurrencyRegExp, ''))

  const priseInUsd = getLocaleString(
    (Number(additionalCurrency) * Number(priceUsd)).toString(),
    true,
  )

  const onButtonPress = () => {}

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Add</Text>
        <TextInput
          style={styles.input}
          value={additionalCurrency}
          onChangeText={onChangeText}
          autoFocus
          keyboardType="decimal-pad"
        />
        <Text style={styles.title}>{symbol} to the portfolio</Text>
      </View>
      {additionalCurrency ? (
        <>
          <Text style={[styles.title, styles.costTitle]}>
            It will cost you {priseInUsd}
          </Text>
          <PressableText title="Add to portfolio" onPress={onButtonPress} />
        </>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AnekLatin-Medium',
    fontSize: 16,
    lineHeight: 16,
    color: 'black',
  },
  input: {
    backgroundColor: '#fffafa',
    minWidth: wp(10),
    maxWidth: wp(40),
    marginHorizontal: wp(2),
    paddingHorizontal: wp(1.5),
    paddingVertical: hp(0.5),
    borderRadius: wp(3),
    textAlign: 'center',
  },
  costTitle: {
    marginVertical: hp(0.7),
  },
})

export default AddCurrency

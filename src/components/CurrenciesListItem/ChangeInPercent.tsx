import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

type Props = {
  changeInPercent: string
}

const ChangeInPercent = ({ changeInPercent }: Props) => {
  const [loaded] = useFonts({
    'AnekLatin-Medium': require('../../assets/fonts/AnekLatin-Medium.ttf'),
  })

  const greenColor = '#008000'
  const redColor = '#e50000'

  const isNumberPositive = changeInPercent[0] !== '-'
  const color = isNumberPositive ? greenColor : redColor
  const prefix = isNumberPositive ? '+' : ''

  const numberToShow = Number(changeInPercent).toFixed(2)

  if (!loaded) {
    return null
  }

  return (
    <Text
      style={{ ...styles.title, color, fontFamily: 'AnekLatin-Medium' }}
    >{`${prefix}${numberToShow}%`}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    // fontFamily: 'AnekLatin-Medium',
    fontSize: 13,
    lineHeight: 13,
  },
})

export default ChangeInPercent

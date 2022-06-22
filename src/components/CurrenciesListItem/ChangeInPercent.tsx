import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  changeInPercent: string
}

const ChangeInPercent = ({ changeInPercent }: Props) => {
  const greenColor = '#008000'
  const redColor = '#e50000'

  const isNumberPositive = changeInPercent[0] !== '-'
  const color = isNumberPositive ? greenColor : redColor
  const prefix = isNumberPositive ? '+' : ''

  const numberToShow = Number(changeInPercent).toFixed(2)
  return (
    <Text
      style={{ ...styles.title, color }}
    >{`${prefix}${numberToShow}%`}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AnekLatin-Medium',
    fontSize: 13,
    lineHeight: 13,
  },
})

export default ChangeInPercent

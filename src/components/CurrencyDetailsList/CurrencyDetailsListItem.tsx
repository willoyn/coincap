import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { useFonts } from 'expo-font'

type Props = {
  title: string
  value: string
}

const CurrencyDetailsListItem = ({ title, value }: Props) => {
  const [loaded] = useFonts({
    'AnekLatin-Light': require('../../assets/fonts/AnekLatin-Light.ttf'),
    'AnekLatin-SemiBold': require('../../assets/fonts/AnekLatin-SemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={{ ...styles.title, fontFamily: 'AnekLatin-Light' }}>
        {title}:{' '}
      </Text>
      <Text style={{ ...styles.value, fontFamily: 'AnekLatin-SemiBold' }}>
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    marginVertical: hp(0.8),
    paddingVertical: hp(0.4),
    paddingHorizontal: wp(1.3),
    flexDirection: 'row',
    backgroundColor: '#fffafa',
    borderRadius: wp(2.3),
    alignItems: 'center',
  },
  title: {
    // fontFamily: 'AnekLatin-Light',
    fontSize: 16,
    color: 'black',
    maxWidth: wp(60),
    marginRight: wp(3),
  },
  value: {
    // fontFamily: 'AnekLatin-SemiBold',
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
})

export default CurrencyDetailsListItem

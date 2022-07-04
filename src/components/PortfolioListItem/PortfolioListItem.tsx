import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useFonts } from 'expo-font'

type Props = {
  id: string
  name: string
  growthTitle: string
  onDeleteItemPress: (id: string) => void
}

const PortfolioListItem = ({
  id,
  name,
  growthTitle,
  onDeleteItemPress,
}: Props) => {
  const [loaded] = useFonts({
    'AnekLatin-ExtraBold': require('../../assets/fonts/AnekLatin-ExtraBold.ttf'),
    'AnekLatin-Medium': require('../../assets/fonts/AnekLatin-Medium.ttf'),
  })

  const onPress = () => onDeleteItemPress(id)

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.info}>
        <Text
          style={{ ...styles.name, fontFamily: 'AnekLatin-ExtraBold' }}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text style={{ ...styles.growthTitle, fontFamily: 'AnekLatin-Medium' }}>
          {growthTitle}
        </Text>
      </View>
      <Pressable style={styles.pressable} onPress={onPress}>
        <MaterialIcon name="delete-outline" color="black" size={22} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp(90),
    marginHorizontal: wp(10),
    height: hp(8),
    marginBottom: hp(2),
    paddingHorizontal: wp(2.3),
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: '#f5f5f5',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(10),
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    // fontFamily: 'AnekLatin-ExtraBold',
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
    maxWidth: wp(50),
    marginBottom: hp(0.5),
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  growthTitle: {
    fontSize: 14,
    lineHeight: 14,
    // fontFamily: 'AnekLatin-Medium',
    color: '#202020',
  },
  icon: {
    marginRight: wp(1.6),
    color: '#202020',
  },
})

export default PortfolioListItem

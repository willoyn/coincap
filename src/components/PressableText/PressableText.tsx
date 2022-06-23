import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

type Props = {
  title: string
  onPress: () => void
  pressableStyle?: Record<string, unknown>
  textStyle?: Record<string, unknown>
}

const PressableText = ({
  title,
  onPress,
  pressableStyle,
  textStyle,
}: Props) => (
  <Pressable style={[styles.pressable, pressableStyle]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </Pressable>
)

PressableText.defaultProps = {
  pressableStyle: {},
  textStyle: {},
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#fffafa',
    borderRadius: wp(2.3),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.7),
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'AnekLatin-Bold',
    fontSize: 16,
    color: 'black',
  },
})

export default PressableText

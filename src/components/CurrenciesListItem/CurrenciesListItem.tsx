import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

import ChangeInPercent from './ChangeInPercent'

import { AssetsItem } from '../../types/api/AssetsResponse'

type Props = {
  data: AssetsItem
  onItemPress: (id: string, name: string) => void
  onAddItemPress: () => void
}

const CurrenciesListItem = ({
  data: { changePercent24Hr, marketCapUsd, name, priceUsd, rank, symbol, id },
  onItemPress,
  onAddItemPress,
}: Props) => {
  const usdExchangeTitle = `1 ${symbol} = $${Number(priceUsd).toFixed(2)}`

  /* .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") is 
     equal to .toLocaleString('en-US') but it works on Android too;
     using it because .toLocaleString('en-US') works on iOS only
   */
  const capitalizationTitle = `$${Math.round(Number(marketCapUsd))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={styles.itemInfoPressable}
        onPress={() => onItemPress(id, name)}
      >
        <View style={styles.firstRow}>
          <Text style={styles.rank}>{`#${rank}`}</Text>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <ChangeInPercent changeInPercent={changePercent24Hr} />
        </View>
        <View style={styles.secondRow}>
          <FontAwesome5Icon name="exchange-alt" style={styles.icon} />
          <Text style={styles.titleNearIcon}>{usdExchangeTitle}</Text>
        </View>
        <View style={styles.thirdRow}>
          <FontAwesome5Icon name="briefcase" style={styles.icon} />
          <Text style={styles.titleNearIcon}>{capitalizationTitle}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.addItemPressable} onPress={onAddItemPress}>
        <FontAwesome5Icon name="plus" color="black" size={16} />
      </Pressable>
    </View>
  )
}

const itemHeight = hp(10.3)
const itemHeightMargin = hp(2)
export const itemTotalHeight = itemHeight + itemHeightMargin

const itemWidth = wp(90)
const itemWidthMargin = wp(10)
export const itemTotalWidth = itemWidth + itemWidthMargin

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: itemWidth,
    marginHorizontal: itemWidthMargin,
    height: itemHeight,
    marginBottom: itemHeightMargin,
    paddingHorizontal: wp(2.3),
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: '#f5f5f5',
  },
  itemInfoPressable: {
    flex: 1,
  },
  addItemPressable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(10),
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    fontFamily: 'AnekLatin-Regular',
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
  },
  name: {
    fontFamily: 'AnekLatin-ExtraBold',
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
    marginHorizontal: wp(1.5),
    maxWidth: wp(50),
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  titleNearIcon: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'AnekLatin-Medium',
    color: '#202020',
  },
  icon: {
    marginRight: wp(1.6),
    color: '#202020',
  },
  thirdRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default CurrenciesListItem

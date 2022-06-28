import React, { useContext } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  ListRenderItemInfo,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import CustomLoader from '../../components/CustomLoader/CustomLoader'
import PortfolioListItem from '../../components/PortfolioListItem/PortfolioListItem'

import removeCurrencyFromPortfolio from '../../hooks/removeCurrencyFromPortfolio'
import usePortfolioList from '../../hooks/usePortfolioList'

import { AppContext } from '../../store'

import getCurrencyGrowthTitle from '../../utils/getCurrencyGrowthTitle'

import { AssetsItem } from '../../types/api/AssetsResponse'
import { PortfolioListItem as PortfolioListItemType } from '../../types/store/AppState'

const Portfolio = () => {
  const {
    state: {
      currencies: { data: relevantCurrencies },
      portfolio: { isLoading },
    },
    dispatch,
  } = useContext(AppContext)
  const portfolioList = usePortfolioList()

  const getRelevantCurrencyData = (currencyId: string) =>
    relevantCurrencies.find(({ id }: AssetsItem) => id === currencyId)

  const getRelevantCurrencyCostInUsd = (id: string, currencyValue: number) => {
    const { priceUsd } = getRelevantCurrencyData(id)
    return Number(priceUsd) * currencyValue
  }

  const getPortfolioCostInUsd = (costType: 'relevant' | 'previous') => {
    let sum = 0
    switch (costType) {
      case 'relevant': {
        portfolioList.forEach(({ id, currencyValue }) => {
          sum += getRelevantCurrencyCostInUsd(id, currencyValue)
        })
        break
      }
      case 'previous': {
        portfolioList.forEach(({ currencyValueInUsdWhenAdded }) => {
          sum += currencyValueInUsdWhenAdded
        })
        break
      }
      default: {
        console.log('getPortfolioCostInUsd default case')
      }
    }
    return sum
  }

  const getPortfolioGrowthTitle = () =>
    getCurrencyGrowthTitle(
      getPortfolioCostInUsd('relevant'),
      getPortfolioCostInUsd('previous'),
    )

  const renderItem = ({
    item: { currencyValue, currencyValueInUsdWhenAdded, id, name },
  }: ListRenderItemInfo<PortfolioListItemType>) => {
    const growthTitle = getCurrencyGrowthTitle(
      getRelevantCurrencyCostInUsd(id, currencyValue),
      currencyValueInUsdWhenAdded,
    )
    return (
      <PortfolioListItem
        id={id}
        name={name}
        onDeleteItemPress={onDeleteItemPress}
        growthTitle={growthTitle}
      />
    )
  }

  const onDeleteItemPress = (id: string) =>
    removeCurrencyFromPortfolio(id, dispatch)

  return (
    <SafeAreaView style={styles.screen}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <View style={styles.listContainer}>
          {portfolioList.length ? (
            <>
              <Text style={styles.listHeader}>
                Total amount: {getPortfolioGrowthTitle()}
              </Text>
              <FlatList
                data={portfolioList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </>
          ) : (
            <Text style={styles.listPlaceholderTitle}>Portfolio is empty</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    justifyContent: 'center',
  },
  listHeader: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'AnekLatin-ExtraBold',
    fontSize: 18,
    lineHeight: 18,
    color: 'black',
    marginVertical: hp(2),
    maxWidth: wp(90),
  },
  listPlaceholderTitle: {
    fontFamily: 'AnekLatin-Medium',
    fontSize: 18,
    lineHeight: 18,
    color: 'black',
  },
})

export default Portfolio

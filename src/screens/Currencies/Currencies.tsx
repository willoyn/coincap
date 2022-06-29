import React, { useContext, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import CurrenciesList from '../../components/CurrenciesList/CurrenciesList'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar'

import useCurrencies from '../../hooks/useCurrencies'
import { AppContext } from '../../store'

import { CurrenciesNavigationProps } from '../../types/Navigation'

const Currencies = ({
  navigation: { navigate },
}: CurrenciesNavigationProps) => {
  const {
    state: {
      currencies: { isFetching },
    },
  } = useContext(AppContext)
  const [listOffset, setListOffset] = useState(0)
  const currencies = useCurrencies(listOffset)

  const onItemPress = (id: string, name: string) => {
    navigate('Currency', { id, name })
  }

  const onAddItemPress = (id: string, name: string) => {
    navigate('AddCurrency', { id, name })
  }

  const onListEndReached = () => {
    if (!isFetching) {
      setListOffset(offset => offset + 10)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomStatusBar />
      <View style={styles.screen}>
        {currencies.length ? (
          <CurrenciesList
            data={currencies}
            onItemPressed={onItemPress}
            onAddItemPressed={onAddItemPress}
            onEndReached={onListEndReached}
          />
        ) : (
          <CustomLoader />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e5e4e2',
  },
  screen: {
    backgroundColor: '#e5e4e2',
    paddingTop: hp(2),
  },
})

export default Currencies

import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import CurrencyDetailsList from '../../components/CurrencyDetailsList/CurrencyDetailsList'
import CurrencyHistoryGraph from '../../components/CurrencyHistoryGraph/CurrencyHistoryGraph'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import PressableText from '../../components/PressableText/PressableText'

import useCurrencyHistory from '../../hooks/useCurrencyHistory'

import { CurrencyNavigationProps } from '../../types/Navigation'

const Currency = ({
  route: {
    params: { id, name },
  },
  navigation: { navigate },
}: CurrencyNavigationProps) => {
  const currencyHistory = useCurrencyHistory(id, 'd1')

  const onAddToPortfolio = () => navigate('AddCurrency', { id, name })

  return (
    <SafeAreaView style={styles.screen}>
      {currencyHistory.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <CurrencyDetailsList id={id} />
          <CurrencyHistoryGraph history={currencyHistory} />
          <PressableText
            title="Add to portfolio"
            onPress={onAddToPortfolio}
            pressableStyle={styles.button}
          />
        </ScrollView>
      ) : (
        <CustomLoader />
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
  button: {
    marginVertical: hp(2),
  },
})

export default Currency

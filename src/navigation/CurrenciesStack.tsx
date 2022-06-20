import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Currencies from '../screens/Currencies/Currencies'
import Currency from '../screens/Currency/Currency'
import AddCurrency from '../screens/AddCurrency/AddCurrency'

import { CurrenciesStackParamList } from '../types/Navigation'

const Stack = createNativeStackNavigator<CurrenciesStackParamList>()

const CurrenciesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Currencies" component={Currencies} />
    <Stack.Screen name="Currency" component={Currency} />
    <Stack.Screen name="AddCurrency" component={AddCurrency} />
  </Stack.Navigator>
)

export default CurrenciesStack

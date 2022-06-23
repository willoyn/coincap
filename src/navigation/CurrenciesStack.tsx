import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Currencies from '../screens/Currencies/Currencies'
import Currency from '../screens/Currency/Currency'
import AddCurrency from '../screens/AddCurrency/AddCurrency'

import { CurrenciesStackParamList } from '../types/Navigation'

const Stack = createNativeStackNavigator<CurrenciesStackParamList>()

const CurrenciesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Currencies"
      component={Currencies}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Currency"
      component={Currency}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name="AddCurrency"
      component={AddCurrency}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
)

export default CurrenciesStack

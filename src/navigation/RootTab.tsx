import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CurrenciesStack from './CurrenciesStack'
import Portfolio from '../screens/Portfolio/Portfolio'

import { RootTabParamList } from '../types/Navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

const RootTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="CurrenciesStack" component={CurrenciesStack} />
    <Tab.Screen name="Portfolio" component={Portfolio} />
  </Tab.Navigator>
)

export default RootTab

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import CurrenciesStack from './CurrenciesStack'
import Portfolio from '../screens/Portfolio/Portfolio'

import { RootTabParamList } from '../types/Navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

const portfolioIcon = () => (
  <MaterialCommunityIcon name="briefcase-outline" color="black" size={28} />
)

const currenciesIcon = () => (
  <MaterialCommunityIcon name="format-list-numbered" color="black" size={28} />
)

const RootTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="CurrenciesStack"
      component={CurrenciesStack}
      options={{ title: 'Currencies', tabBarIcon: currenciesIcon }}
    />
    <Tab.Screen
      name="Portfolio"
      component={Portfolio}
      options={{ title: 'Portfolio', tabBarIcon: portfolioIcon }}
    />
  </Tab.Navigator>
)

export default RootTab

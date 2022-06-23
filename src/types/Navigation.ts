import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type CurrenciesStackParamList = {
  Currencies: undefined
  Currency: {
    id: string
    name: string
  }
  AddCurrency: {
    id: string
    name: string
  }
}

export type CurrenciesNavigationProps = NativeStackScreenProps<
  CurrenciesStackParamList,
  'Currencies'
>
export type CurrencyNavigationProps = NativeStackScreenProps<
  CurrenciesStackParamList,
  'Currency'
>
export type AddCurrencyNavigationProps = NativeStackScreenProps<
  CurrenciesStackParamList,
  'AddCurrency'
>

export type RootTabParamList = {
  CurrenciesStack: undefined
  Portfolio: undefined
}

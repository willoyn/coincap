import React, {
  createContext,
  Dispatch,
  ReactNode,
  useMemo,
  useReducer,
} from 'react'
import appReducer from './reducer'

import { AppState } from '../types/store/AppState'
import { AppActions } from '../types/store/AppActions'

export const initialState: AppState = {
  currencies: {
    data: [],
    error: null,
    isFetching: false,
    isError: false,
  },
  currenciesHistory: {
    data: [],
    error: null,
    isFetching: false,
    isError: false,
  },
  portfolio: {
    isLoading: false,
    timestampWhenLastUpdated: undefined,
  },
}

type Context = {
  state: AppState
  dispatch: AppDispatch
}

export type AppDispatch = Dispatch<AppActions>

export const AppContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

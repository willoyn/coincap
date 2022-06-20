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
  isFetching: false,
}

type Context = {
  state: AppState
  dispatch: Dispatch<AppActions>
}

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

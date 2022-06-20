import React from 'react'
import { AppContextProvider } from './src/store/index'
import Navigation from './src/navigation/Navigation'

const App = () => (
  <AppContextProvider>
    <Navigation />
  </AppContextProvider>
)

export default App

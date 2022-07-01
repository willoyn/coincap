import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppContextProvider } from './src/store/index'
import Navigation from './src/navigation/Navigation'

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Navigation />
      </AppContextProvider>
    </ApolloProvider>
  )
}

export default App

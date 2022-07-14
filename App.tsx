import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppContextProvider } from './src/store/index'
import Navigation from './src/navigation/Navigation'

const App = () => {
  const client = new ApolloClient({
    uri: 'https://fathomless-lowlands-13461.herokuapp.com',
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

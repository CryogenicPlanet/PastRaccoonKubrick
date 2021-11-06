import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'

import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const baseURL = import.meta.env.API_URL || 'localhost:4000/graphql'

const httpLink = new HttpLink({
  uri: `http://${baseURL}`
})

const wsLink = new WebSocketLink({
  uri: `ws://${baseURL}`,
  options: {
    reconnect: true
  }
})

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

const Apollo = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo

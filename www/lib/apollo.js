import getConfig from 'next/config'

import { ApolloClient } from 'apollo-client'
import { ApolloLink, from } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from 'apollo-utilities'

import fetch from 'isomorphic-unfetch'
import ws from 'isomorphic-ws'

// Config

const { publicRuntimeConfig } = getConfig()

// Pollyfil

if (!process.browser) {
  global.fetch = fetch
}

let apolloClient = null

// Apollo

function create(initialState, { getToken }) {
  const uploadLink = createUploadLink({
    uri: publicRuntimeConfig.prismaEndpoint,
    credentials: 'same-origin',
  })

  const subscriptionsClient = new SubscriptionClient(
    publicRuntimeConfig.prismaWsEndpoint,
    {
      reconnect: true,
    },
    ws,
  )

  const wsLink = new WebSocketLink(subscriptionsClient)

  const authLink = new ApolloLink((operation, forward) => {
    const token = getToken()

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }))

    return forward(operation)
  })

  const endpointLinks = ApolloLink.split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    uploadLink,
  )

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}
         Location: ${JSON.stringify(locations)}
         Path: ${path}`,
        ),
      )
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: from([authLink, errorLink, endpointLinks]),
    cache: new InMemoryCache().restore(initialState),
  })
}

export function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options)
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}

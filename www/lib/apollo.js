const httpLink = createHttpLink({ uri: API_URL })

const uploadLink = createUploadLink({ uri: API_URL })

const wsLink = new WebSocketLink({
  uri: SUBSCRIPTION_URL,
  options: {
    reconnect: true,
  },
})

const endpointLinks = ApolloLink.split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  uploadLink,
)

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = isTokenValid()
    ? `Bearer ${localStorage.getItem('token')}`
    : null

  operation.setContext({
    headers: {
      authorization: token,
    },
  })
  return forward(operation)
})

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

const client = new ApolloClient({
  link: ApolloLink.from([middlewareLink, errorLink, endpointLinks, httpLink]),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

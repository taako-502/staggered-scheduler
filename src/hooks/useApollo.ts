import { ApolloClient, InMemoryCache } from '@apollo/client'

export const useApollo = () => {
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache(),
  })
  return apolloClient
}

export default useApollo

import { ApolloClient, InMemoryCache } from '@apollo/client'

export const useApollo = () => {
  const apolloClient = new ApolloClient({
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL ?? 'http://localhost:8080/query',
    cache: new InMemoryCache(),
  })
  return apolloClient
}

export default useApollo

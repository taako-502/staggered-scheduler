import { ApolloClient, InMemoryCache } from '@apollo/client'

export const useApollo = () => {
  const apolloClient = new ApolloClient({
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL ?? 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  })
  return apolloClient
}

export default useApollo

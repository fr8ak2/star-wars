import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { getSwapiUrl } from '@/utils/api'

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${JSON.stringify(path)}`
            )
        )

    if (networkError) console.error(`[Network error]: ${networkError.message}`)
})

const httpLink = getSwapiUrl()

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
})

const { getClient } = registerApolloClient(() => {
    return client
})

export default getClient

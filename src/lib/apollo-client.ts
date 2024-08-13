import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { getSwapiUrl } from '@/lib/api'
import { ErrorLink } from '@/lib/apollo-error'

const httpLink = getSwapiUrl()

const client = new ApolloClient({
    link: ApolloLink.from([ErrorLink, httpLink]),
    cache: new InMemoryCache(),
})

const { getClient } = registerApolloClient(() => {
    return client
})

export default getClient

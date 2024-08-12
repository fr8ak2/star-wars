'use client'

import { ApolloLink } from '@apollo/client'
import {
    ApolloClient,
    ApolloNextAppProvider,
    InMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support'
import { PropsWithChildren } from 'react'

import { getSwapiUrl } from '@/utils/api'

function makeClient() {
    const httpLink = getSwapiUrl({ fetchOptions: { cache: 'no-store' } })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    })
}

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    )
}

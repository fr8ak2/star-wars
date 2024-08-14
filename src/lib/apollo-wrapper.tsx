'use client'

import { ApolloLink } from '@apollo/client'
import {
    ApolloClient,
    ApolloNextAppProvider,
    InMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support'
import { PropsWithChildren } from 'react'

import { getSwapiUrl } from '@/lib/api'
import { ErrorLink } from '@/lib/apollo-error'

function makeClient() {
    const httpLink = getSwapiUrl()
    const ssrLink =
        typeof window === 'undefined'
            ? [new SSRMultipartLink({ stripDefer: true }), ErrorLink, httpLink]
            : [ErrorLink, httpLink]

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: ApolloLink.from(ssrLink),
    })
}

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    )
}

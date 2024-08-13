import { onError } from '@apollo/client/link/error'

export const ErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${JSON.stringify(path)}`
            )
        )

    if (networkError) console.error(`[Network error]: ${networkError.message}`)
})

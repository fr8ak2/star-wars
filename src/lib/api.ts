import { HttpLink, HttpOptions } from '@apollo/client'

export const getSwapiUrl = (props?: HttpOptions | undefined) =>
    new HttpLink({
        uri: (process.env.NEXT_PUBLIC_SWAPI_URL as string)?.replace(/\/$/, ''),
        ...props,
    })

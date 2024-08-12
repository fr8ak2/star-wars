import './globals.css'

import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import React from 'react'

import { ApolloWrapper } from '@/utils/apollo-wrapper'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Star Wars Character Encyclopedia',
    description:
        'Explore detailed information about characters from the Star Wars universe',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body>
                <ApolloWrapper>{children}</ApolloWrapper>
            </body>
        </html>
    )
}

export default RootLayout

import './app.scss'

import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { ReactNode } from 'react'

import { LayoutDefault } from '@/layouts/LayoutDefault'
import { ApolloWrapper } from '@/utils/apollo-wrapper'

const mulish = Mulish({
    weight: ['400', '500', '600'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-mulish',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Star Wars Character Encyclopedia',
    description:
        'Explore detailed information about characters from the Star Wars universe',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <html lang="en" className={mulish.variable}>
            <body>
                <ApolloWrapper>
                    <LayoutDefault>{children}</LayoutDefault>
                </ApolloWrapper>
            </body>
        </html>
    )
}

export default RootLayout

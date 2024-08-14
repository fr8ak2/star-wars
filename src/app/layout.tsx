import './app.scss'

import type { Metadata } from 'next'
import { Manrope, Mulish } from 'next/font/google'
import type { ReactNode } from 'react'

import { LayoutDefault } from '@/layouts/LayoutDefault'
import { ApolloWrapper } from '@/lib/apollo-wrapper'

const mulish = Mulish({
    weight: ['500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-mulish',
    display: 'swap',
})

const manrope = Manrope({
    weight: ['400', '600', '800'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-manrope',
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
        <html lang="en" className={`${manrope.variable} ${mulish.variable} `}>
            <body>
                <ApolloWrapper>
                    <LayoutDefault>{children}</LayoutDefault>
                </ApolloWrapper>
            </body>
        </html>
    )
}

export default RootLayout

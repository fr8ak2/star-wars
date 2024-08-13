import { FC, PropsWithChildren } from 'react'

import { Logo } from '@/components/Logo/Logo'
import { Nav } from '@/components/Nav/Nav'
import { Box, Wrapper } from '@/shared/shared'

export const Header = () => {
    return (
        <HeaderWrap>
            <Wrapper>
                <Box className="sw-grid sw-grid-cols-[auto_1fr] sw-items-center sw-gap-x-10">
                    <Logo />
                    <Nav />
                </Box>
            </Wrapper>
        </HeaderWrap>
    )
}

export const HeaderWrap: FC<PropsWithChildren> = ({ children }) => (
    <header className="sw-fixed sw-top-0 sw-left-0 sw-w-full sw-min-h-24 sw-z-[101]">
        {children}
    </header>
)

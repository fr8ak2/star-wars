import { FC, PropsWithChildren } from 'react'

import { Logo } from '@/components/Logo/Logo'
import { Box, Wrapper } from '@/shared/shared'

export const Header = () => {
    return (
        <HeaderWrap>
            <Wrapper>
                <Box className="sw-grid sw-grid-cols-[auto_1fr] sw-items-center">
                    <Logo />
                </Box>
            </Wrapper>
        </HeaderWrap>
    )
}

export const HeaderWrap: FC<PropsWithChildren> = ({ children }) => (
    <header className="sw-fixed sw-top-0 sw-left-0 sw-w-full sw-min-h-24z-[101]">
        {children}
    </header>
)

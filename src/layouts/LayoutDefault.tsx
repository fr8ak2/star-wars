import { FC, ReactNode } from 'react'

import { Header, PageFlow } from '@/layouts'
import { Box } from '@/shared'

export interface LayoutProps {
    children: ReactNode
}

export const LayoutDefault: FC<LayoutProps> = ({ children }) => {
    return (
        <Box className="sw-relative sw-min-w-80 sw-overflow-hidden">
            <Header />
            <PageFlow>{children}</PageFlow>
        </Box>
    )
}

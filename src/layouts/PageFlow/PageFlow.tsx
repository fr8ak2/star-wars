import { FC, PropsWithChildren } from 'react'

export const PageFlow: FC<PropsWithChildren> = ({ children }) => (
    <main className="sw-relative sw-z-[2]">{children}</main>
)

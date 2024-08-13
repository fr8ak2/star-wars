import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'

interface WrapperProps {
    className?: string
    children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ className, children }) => {
    return (
        <div className={clsx('sw-relative sw-w-[92%] sw-mx-[4%]', className)}>
            {children}
        </div>
    )
}

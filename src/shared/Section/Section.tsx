import { clsx } from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Section = forwardRef<HTMLElement, PropsWithChildren<SectionProps>>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                className={clsx('sw-relative', className)}
                ref={ref}
                {...props}
            >
                {children}
            </section>
        )
    }
)

Section.displayName = 'Section'

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export const Box = forwardRef<
    HTMLDivElement,
    PropsWithChildren<ComponentPropsWithoutRef<'div'>>
>((props, ref) => (
    <div className={clsx(props.className)} {...props} ref={ref}>
        {props.children}
    </div>
))

Box.displayName = 'Box'

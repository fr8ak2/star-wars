import { FC } from 'react'

export const Error: FC<{ error: string | null }> = ({ error }) => (
    <p className="sw-font-medium sw-text-red-600">Error: {error}</p>
)

import { FC } from 'react'

import { Box } from '@/shared'

export interface SortProps {
    value?: string
    onSort: (order: string) => void
}

const Sorting: FC<SortProps> = ({ value, onSort }) => {
    return (
        <Box className="sw-flex">
            <select
                className="sw-text-sm sw-w-48 sw-h-12 sw-py-2 sw-bg-transparent sw-border-b sw-border-amber-400 sw-cursor-pointer"
                value={value}
                onChange={(e) => onSort(e.target.value)}
            >
                <option value={undefined}>Sort by:</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </Box>
    )
}

export default Sorting

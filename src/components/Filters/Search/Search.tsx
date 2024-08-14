import { FC } from 'react'

export interface SearchProps {
    value?: string
    onSearch: (v: string) => void
    placeholder?: string
}

const Search: FC<SearchProps> = ({ value, onSearch, placeholder }) => {
    return (
        <form>
            <label htmlFor="search" className="sw-sr-only">
                {placeholder}
            </label>
            <input
                id="search"
                className="sw-text-sm sw-w-full md:sw-w-auto md:sw-min-w-80 sw-h-12 sw-py-2 sw-pl-8 sw-pr-3.5 sw-bg-transparent sw-bg-search sw-bg-no-repeat sw-bg-left sw-border-b sw-border-amber-400 focus:sw-outline-none"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                placeholder={placeholder}
                type="search"
            />
        </form>
    )
}

export default Search

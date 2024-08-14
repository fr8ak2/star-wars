import React, { FC, useEffect, useState } from 'react'

import Search from '@/components/Filters/Search/Search'
import Sorting from '@/components/Filters/Sorting/Sorting'
import { Box, Error, Loading, Section, Wrapper } from '@/shared'
import { Character, Sort } from '@/types'
import { sortList } from '@/utils/filtering'

import CharacterCard from '../Card/CharactersCard'

interface CharactersListProps {
    characters: Character[]
    loading?: boolean
    error?: string | null
}

const CharacterList: FC<CharactersListProps> = ({
    characters,
    loading,
    error,
}) => {
    const [search, setSearch] = useState<string>('')
    const [emptySearch, setEmptySearch] = useState<boolean>(false)
    const [sort, setSort] = useState<string | undefined>(undefined)

    const sorted = sortList(characters, sort as Sort, search)

    useEffect(() => {
        setEmptySearch(search.length > 0 && !sorted.length)
    }, [sorted.length, search.length])

    return (
        <Section className="sw-py-40">
            <Wrapper>
                <h1 className="sw-text-4xl sw-font-bold sw-mb-16 sw-text-center">
                    Characters
                </h1>

                {(loading || error) && (
                    <Box className="sw-flex sw-items-center sw-justify-center sw-h-full sw-py-32 sw-text-center">
                        {loading && <Loading />}
                        {error && <Error error={error} />}
                    </Box>
                )}

                {sorted && !loading && !error && (
                    <>
                        <Box className="sw-flex sw-items-center sw-justify-between sw-gap-x-8 sw-gap-y-4 sw-mb-12">
                            <Search
                                value={search}
                                onSearch={setSearch}
                                placeholder="Search character by name..."
                            />

                            <Sorting value={sort} onSort={setSort} />
                        </Box>

                        {emptySearch && (
                            <span>
                                No result for <strong>{search}</strong>.
                            </span>
                        )}

                        <ul className="sw-grid sw-grid-cols-3 sw-gap-7">
                            {sorted?.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                />
                            ))}
                        </ul>
                    </>
                )}
            </Wrapper>
        </Section>
    )
}

export default CharacterList

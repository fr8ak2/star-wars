import React, { FC, useState } from 'react'

import { Box } from '@/shared'
import { Character } from '@/types'

import CharacterCard from '../Card/CharactersCard'

interface CharactersListProps {
    characters: Character[]
}

const CharacterList: FC<CharactersListProps> = ({ characters }) => {
    const [search, setSearch] = useState('')

    const characters2: Character[] = (characters ?? []).map((people) => ({
        id: people?.id ?? '',
        name: people?.name ?? '',
    }))

    return (
        <Box className="container mx-auto p-4">
            <h1 className="sw-text-3xl sw-font-bold sw-mb-4">
                Star Wars Characters
            </h1>
            <ul>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </ul>
        </Box>
    )
}

export default CharacterList

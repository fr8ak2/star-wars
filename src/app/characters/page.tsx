'use client'

import React, { Suspense } from 'react'

import CharacterList from '@/components/Characters/List/CharactersList'
import { useCharacters } from '@/hooks/useCharacters'
import { Loading } from '@/shared'

export const dynamic = 'force-dynamic'

const CharactersPage = () => {
    const { characters, loading, error } = useCharacters()

    return (
        <Suspense fallback={<Loading />}>
            <CharacterList
                characters={characters}
                loading={loading}
                error={error}
            />
        </Suspense>
    )
}

export default CharactersPage

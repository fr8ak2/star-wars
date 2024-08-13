'use client'

import React, { Suspense } from 'react'

import CharacterList from '@/components/Characters/List/CharactersList'
import { useCharacters } from '@/hooks/useCharacters'
import { Error, Loading } from '@/shared'

export const dynamic = 'force-dynamic'

const CharactersPage = () => {
    const { characters, loading, error } = useCharacters()

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <Suspense fallback={<Loading />}>
            <CharacterList characters={characters} />
        </Suspense>
    )
}

export default CharactersPage

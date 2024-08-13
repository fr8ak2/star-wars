'use client'

import { useSuspenseQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import { GET_CHARACTERS } from '@/graphql/queries'
import { Character, CharactersData } from '@/types'

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const { data, error: queryError } =
        useSuspenseQuery<CharactersData>(GET_CHARACTERS)

    useEffect(() => {
        if (data) {
            setCharacters(data.allPeople.people)
            setLoading(false)
        }
    }, [data])

    useEffect(() => {
        if (queryError && !loading) {
            setError(`Failed to fetch characters: ${queryError.message}`)
        }
    }, [data, loading, queryError])

    return { characters, loading, error }
}

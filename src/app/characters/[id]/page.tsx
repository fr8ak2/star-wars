'use client'

import { useSuspenseQuery } from '@apollo/client'
import { FC, useEffect, useState } from 'react'

import { GET_CHARACTER_DETAILS } from '@/graphql/queries'
import { CharacterDetailData } from '@/types/сharacters'

export const dynamic = 'force-dynamic'

interface CharacterDetailProps {
    params: {
        id: string
    }
}

const CharacterPage: FC<CharacterDetailProps> = ({ params }) => {
    const [character, setCharacter] = useState<CharacterDetailData | null>(null)
    const { data } = useSuspenseQuery<CharacterDetailData>(
        GET_CHARACTER_DETAILS,
        {
            variables: { id: params.id },
        }
    )

    useEffect(() => {
        setCharacter({ person: data?.person })
    }, [data.person])

    if (!character) {
        return <p>Character not found.</p>
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{character.person.name}</h1>
            <p>
                <strong>Birth Year:</strong> {character.person.birthYear}
            </p>
            <p>
                <strong>Gender:</strong> {character.person.gender}
            </p>
            <p>
                <strong>Height:</strong> {character.person.height} cm
            </p>
            <p>
                <strong>Mass:</strong> {character.person.mass} kg
            </p>
            <p>
                <strong>Homeworld:</strong> {character.person.homeworld.name}
            </p>
            <p>
                <strong>Species:</strong>{' '}
                {character.person.species?.name || 'Unknown'}
            </p>
            <h2 className="text-2xl font-semibold mt-6">Films</h2>
            <ul className="list-disc ml-5">
                {character.person.filmConnection.films.map((film) => (
                    <li key={film.id}>
                        {film.title} (Released: {film.releaseDate})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CharacterPage

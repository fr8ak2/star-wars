import Link from 'next/link'
import React, { FC } from 'react'

import { Character } from '@/types/сharacters'
import { generateSlug } from '@/utils/slug'

interface CharacterCardProps {
    character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    const slug = generateSlug(character.name)

    return (
        <li className="mb-4 p-4 bg-gray-100 rounded-lg">
            <Link href={`/characters/${slug}`}>
                <h2 className="text-2xl font-semibold">{character.name}</h2>
            </Link>
        </li>
    )
}

export default CharacterCard

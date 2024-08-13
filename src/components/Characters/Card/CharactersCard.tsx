import React from 'react'

import { Character } from '@/types/сharacters'

interface CharacterCardProps {
    character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <li className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold">{character.name}</h2>
        </li>
    )
}

export default CharacterCard

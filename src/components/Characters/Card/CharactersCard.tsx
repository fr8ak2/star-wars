import Link from 'next/link'
import React, { FC } from 'react'

import { Character } from '@/types/сharacters'

interface CharacterCardProps {
    character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    return (
        <li
            className="
            sw-relative
            sw-w-full
            sw-min-h-[12.5rem]
            sw-bg-white/20
            sw-border
            sw-border-white/80
            sw-rounded-[0.625rem]
            sw-grayscale
            sw-opacity-80
            sw-overflow-hidden
            hover:sw-bg-amber-400
            hover:sw-opacity-100
            hover:sw-border-amber-400
            hover:sw-grayscale-0
            sw-transition-all
            sw-duration-200
            sw-ease-out"
        >
            <Link
                className="sw-flex sw-flex-col sw-justify-center sw-p-6 sw-w-full sw-h-full sw-bg-gradient-63 sw-from-[rgb(0_0_0/.5)_33%] sw-to-[rgb(0_0_0/.8)_100%]"
                href={`/characters/${character.id}`}
            >
                <h2 className="font-semibold text-2xl sw-mb-2.5">
                    {character.name}
                </h2>

                <p className="sw-text-sm">
                    In nisl ex, iaculis in condimentum non, pellentesque sit
                    amet tortor. Vestibulum ligula lectus, dignissim eu accumsan
                    non, consectetur sed turpis.
                </p>
            </Link>
        </li>
    )
}

export default CharacterCard

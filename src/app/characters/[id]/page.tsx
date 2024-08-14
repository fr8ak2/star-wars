'use client'

import { useSuspenseQuery } from '@apollo/client'
import { FC, useEffect, useState } from 'react'

import { GET_CHARACTER_DETAILS } from '@/graphql/queries'
import { Box, Loading, Section, Wrapper } from '@/shared'
import { CharacterDetailData } from '@/types/сharacters'

export const dynamic = 'force-dynamic'

interface CharacterDetailProps {
    params: {
        id: string
    }
}

const CharacterPage: FC<CharacterDetailProps> = ({
    params,
}: CharacterDetailProps) => {
    const [character, setCharacter] = useState<CharacterDetailData | null>(null)
    const { data } = useSuspenseQuery<CharacterDetailData>(
        GET_CHARACTER_DETAILS,
        {
            variables: { id: String(params.id) },
        },
    )

    useEffect(() => {
        setCharacter({ person: data?.person })
    }, [data.person])

    if (!character) {
        return <Loading className="sw-py-40 sw-text-center" />
    }

    const characterInfo = [
        { label: 'Birth year', value: character.person?.birthYear },
        { label: 'Gender', value: character.person?.gender },
        { label: 'Height', value: `${character.person?.height}cm` },
        { label: 'Mass', value: `${character.person?.mass}kg` },
        { label: 'Eye color', value: character.person?.eyeColor },
        { label: 'Skin color', value: character.person?.skinColor },
    ]

    const characterHomeWorld = [
        { label: 'Name', value: character.person.homeworld?.name },
        {
            label: 'Diameter',
            value: character.person.homeworld?.diameter ?? 'n/a',
        },
        {
            label: 'Orbital Period',
            value: character.person.homeworld?.orbitalPeriod ?? 'n/a',
        },
        {
            label: 'Population',
            value: character.person.homeworld?.population ?? 'n/a',
        },
        {
            label: 'Terrains',
            value: character.person.homeworld?.terrains.join(', '),
        },
        {
            label: 'Climates',
            value: character.person.homeworld?.climates.join(', '),
        },
    ]

    return (
        <Section className="sw-py-40">
            <Wrapper>
                <h1 className="sw-text-5xl sw-font-bold sw-text-amber-400 sw-mb-16 sw-text-center">
                    {character.person.name}
                </h1>

                <Box className="sw-relative sw-mb-10">
                    <h2 className="sw-text-xl sw-font-bold sw-mb-4 sw-uppercase">
                        Information:
                    </h2>

                    <Box className="sw-flex sw-flex-col sw-gap-4">
                        {characterInfo?.map(({ label, value }) => (
                            <Box
                                className="sw-flex sw-items-center sw-gap-3"
                                key={`character-info-${label}`}
                            >
                                <span className="sw-text-xs sw-font-extrabold sw-w-52 sw-tracking-widest sw-uppercase">
                                    {label}:
                                </span>
                                <span className="sw-flex sw-items-center sw-justify-center sw-text-sm sw-w-full sw-min-h-8 sw-py-1.5 sw-px-5 sw-bg-amber-400 sw-text-black sw-text-center">
                                    {value}
                                </span>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box className="sw-relative sw-mb-10">
                    <h2 className="sw-text-xl sw-font-bold sw-mb-4 sw-uppercase">
                        Home World:
                    </h2>

                    <Box className="sw-flex sw-flex-col sw-gap-3">
                        {characterHomeWorld?.map(({ label, value }) => (
                            <Box
                                className="sw-flex sw-items-center sw-gap-4"
                                key={`character-homeworld-${label}`}
                            >
                                <span className="sw-text-xs sw-font-extrabold sw-w-52 sw-tracking-widest sw-uppercase">
                                    {label}:
                                </span>
                                <span className="sw-flex sw-items-center sw-justify-center sw-text-sm sw-w-full sw-min-h-8 sw-py-1.5 sw-px-5 sw-bg-amber-400 sw-text-black sw-text-center">
                                    {value}
                                </span>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box className="sw-relative sw-mb-10">
                    <h2 className="sw-text-xl sw-font-bold sw-mb-4 sw-uppercase">
                        Species:
                    </h2>

                    <Box className="sw-flex sw-flex-col sw-gap-3">
                        <Box className="sw-flex sw-items-center sw-gap-4">
                            <span className="sw-text-xs sw-font-extrabold sw-w-52 sw-tracking-widest sw-uppercase">
                                Name:
                            </span>
                            <span className="sw-flex sw-items-center sw-justify-center sw-text-sm sw-w-full sw-min-h-8 sw-py-1.5 sw-px-5 sw-bg-amber-400 sw-text-black sw-text-center">
                                {character.person.species?.name ?? 'n/a'}
                            </span>
                        </Box>
                    </Box>
                </Box>

                <Box className="sw-relative sw-mb-10">
                    <h2 className="sw-text-xl sw-font-bold sw-mb-4 sw-uppercase">
                        Film Collections:
                    </h2>

                    <Box className="sw-flex sw-flex-col sw-gap-3">
                        {character.person.filmConnection.films.map((film) => (
                            <Box
                                className="sw-flex sw-items-center sw-gap-4"
                                key={`character-film-${film.id}`}
                            >
                                <span className="sw-text-xs sw-font-extrabold sw-w-52 sw-tracking-widest sw-uppercase">
                                    {film.title}:
                                </span>
                                <span className="sw-flex sw-items-center sw-justify-center sw-text-sm sw-w-full sw-min-h-8 sw-py-1.5 sw-px-5 sw-bg-amber-400 sw-text-black sw-text-center">
                                    {film.releaseDate}
                                </span>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Wrapper>
        </Section>
    )
}

export default CharacterPage

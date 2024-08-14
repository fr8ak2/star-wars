import { FC, useEffect, useState } from 'react'

import { Box, Loading, Section, Wrapper } from '@/shared'
import { CharacterDetailData } from '@/types/сharacters'

import CharactersDetailList from '../Details/List/CharactersDetailsList'

interface CharacterDetailsProps {
    details: CharacterDetailData
}

const CharactersDetails: FC<CharacterDetailsProps> = ({ details }) => {
    const [character, setCharacter] = useState<CharacterDetailData | null>(null)

    useEffect(() => {
        setCharacter({ person: details?.person })
    }, [details.person])

    if (!character) {
        return <Loading className="sw-py-40 sw-text-center" />
    }

    const characterInfo = [
        {
            title: 'Information',
            list: [
                { label: 'Birth year', value: character.person?.birthYear },
                { label: 'Gender', value: character.person?.gender },
                { label: 'Height', value: `${character.person?.height}cm` },
                { label: 'Mass', value: `${character.person?.mass}kg` },
                { label: 'Eye color', value: character.person?.eyeColor },
                { label: 'Skin color', value: character.person?.skinColor },
            ],
        },
        {
            title: 'Home World',
            list: [
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
            ],
        },
        {
            title: 'Species',
            list: [{ label: 'Name', value: character.person.species?.name }],
        },
    ]

    return (
        <Section className="sw-py-40">
            <Wrapper>
                <h1 className="sw-text-5xl sw-font-bold sw-text-amber-400 sw-mb-16 sw-text-center">
                    {character.person.name}
                </h1>

                <CharactersDetailList details={characterInfo} />

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

export default CharactersDetails

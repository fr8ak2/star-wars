'use client'

import { useSuspenseQuery } from '@apollo/client'
import { FC, Suspense } from 'react'

import CharactersDetails from '@/components/Characters/Details/CharactersDetails'
import { GET_CHARACTER_DETAILS } from '@/graphql/queries'
import { Loading } from '@/shared'
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
    const { data } = useSuspenseQuery<CharacterDetailData>(
        GET_CHARACTER_DETAILS,
        {
            variables: { id: String(params.id) },
        },
    )

    return (
        <Suspense fallback={<Loading />}>
            <CharactersDetails details={data} />
        </Suspense>
    )
}

export default CharacterPage

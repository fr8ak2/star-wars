'use client'

import { useSuspenseQuery } from '@apollo/client'
import { FC, Suspense } from 'react'

import CharactersDetail from '@/components/Characters/Details/CharactersDetail'
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
            <CharactersDetail data={data} />
        </Suspense>
    )
}

export default CharacterPage

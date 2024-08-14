import { FC } from 'react'

import { Box } from '@/shared'

interface CharactersDetailListProps {
    title?: string
    list: { label: string; value: string | number | undefined }[]
}

interface CharactersDetailsListProps {
    details: CharactersDetailListProps[]
}

const charactersDetailsList: FC<CharactersDetailsListProps> = ({ details }) => {
    return (
        <>
            {details?.map((detail) => (
                <Box
                    className="sw-relative sw-mb-10"
                    key={`character-detail-${detail.title}`}
                >
                    <h2 className="sw-text-xl sw-font-bold sw-mb-4 sw-uppercase">
                        {detail.title}:
                    </h2>

                    <Box className="sw-flex sw-flex-col sw-gap-4">
                        {detail?.list.map((item) => (
                            <Box
                                className="sw-flex sw-items-center sw-gap-3"
                                key={`character-details-${item.label}`}
                            >
                                <span className="sw-text-xs sw-font-extrabold sw-w-52 sw-tracking-widest sw-uppercase">
                                    {item.label}:
                                </span>
                                <span className="sw-flex sw-items-center sw-justify-center sw-text-sm sw-w-full sw-min-h-8 sw-py-1.5 sw-px-5 sw-bg-amber-400 sw-text-black sw-text-center">
                                    {item.value}
                                </span>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </>
    )
}

export default charactersDetailsList

import { Box } from '@/shared/Box/Box'
import { Section } from '@/shared/Section/Section'
import { Wrapper } from '@/shared/Wrapper/Wrapper'

export const Intro = () => (
    <Section className="sw-flex sw-items-center sw-h-screen">
        <Box className="sw-absolute sw-top-0 sw-left-0 sw-w-full sw-h-full sw-bg-intro sw-bg-cover sw-bg-center"></Box>
        <Wrapper>
            <Box className="sw-flex sw-flex-col sw-items-center sw-text-center">
                <h1 className="sw-text-3xl sw-font-bold sw-mb-4">
                    Welcome to Star Wars Encyclopedia
                </h1>
                <p>
                    Explore detailed information about characters from the{' '}
                    <span className="sw-font-semibold sw-underline">
                        Star Wars
                    </span>{' '}
                    universe.
                </p>
            </Box>
        </Wrapper>
    </Section>
)

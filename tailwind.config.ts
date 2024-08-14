import type { Config } from 'tailwindcss'

const config: Config = {
    prefix: 'sw-',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            heading: 'var(--font-mulish)',
            display: 'var(--font-manrope)',
            body: 'var(--font-manrope)',
        },
        extend: {
            maxWidth: {
                screen: '100vw',
            },
            backgroundImage: {
                intro: 'url(/img/intro.jpg)',
                select: 'url(/img/select.svg)',
                search: 'url(/icons/search.svg)',
            },
        },
    },
    plugins: [],
}
export default config

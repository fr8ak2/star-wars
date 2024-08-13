import type { Config } from 'tailwindcss'

const config: Config = {
    prefix: 'sw-',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            maxWidth: {
                screen: '100vw',
            },
        },
    },
    plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class', // Disable system preference detection
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                industrial: {
                    50: '#f6f7f9',
                    100: '#eceef2',
                    200: '#d5dae2',
                    300: '#b0bcc8',
                    400: '#8496a7',
                    500: '#64798e',
                    600: '#4f6176',
                    700: '#404e60',
                    800: '#384351',
                    900: '#313944',
                    950: '#21262d',
                },
                celeros: {
                    blue: {
                        DEFAULT: '#1B365D', // Cello
                        light: '#268BD4',   // Curious Blue
                        50: '#f0f5fa',
                        100: '#e0ebf5',
                        200: '#c2d7eb',
                        300: '#94bce0',
                        400: '#5c9bd0',
                        500: '#3a7ebd',
                        600: '#2a639b',
                        700: '#23507d',
                        800: '#1B365D',     // Primary Brand
                        900: '#1b3b5b',
                    },
                    orange: {
                        DEFAULT: '#E87722', // Tango
                        500: '#E87722',
                        600: '#c9621b',
                    },
                    grey: '#A7A8AA', // Bombay
                },
            },
        },
    },
    plugins: [],
}
export default config

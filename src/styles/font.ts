import { Plus_Jakarta_Sans, JetBrains_Mono as FontMono } from 'next/font/google'

export const fontJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jakarta',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
})

import { Roboto, Roboto_Mono, Chakra_Petch } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '700',
    '900',
  ]
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
  ]
}) 
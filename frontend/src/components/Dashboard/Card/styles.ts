import tw from 'tailwind-styled-components'

import { Colors } from '../../Accordion/styles'

type Props = {
  card?: string
  title?: string
  description?: string
}

export interface CardProps {
  sx?: Props
  colors?: Colors
  badgecolor?: string
  disabled?: boolean
}

export const Card = tw.div<CardProps>`
  p-6
  block 
  rounded-lg 
  cursor-pointer
  select-none
  border-l-8
  bg-gray-100
  dark:bg-gray-400
  transform 
  md:hover:scale-105
  hover:z-50
  ${({ colors }) => colors && `${colors.light} ${colors.dark}`}
  ${({ sx }) => (sx?.card ? `${sx.card}` : ``)}
  ${({ disabled }) => disabled && `opacity-50 cursor-not-allowed`}} 
`

export const Title = tw.h1<CardProps>`
  flex
  items-center
  gap-3
  font-medium 
  leading-tight
  text-neutral-800 
  dark:text-black
  ${({ sx }) => (sx?.title ? `${sx.title}` : `text-xl`)} 
`

export const Description = tw.p<CardProps>`
  mt-4
  text-sm 
  text-neutral-600
  text-justify 
  dark:text-black
  ${({ sx }) => (sx?.description ? `${sx.description}` : ``)}
`

export const Badge = tw.span<CardProps>`
  text-xs 
  font-medium 
  mr-2 
  px-2.5 
  py-0.5 
  rounded 
  bg-indigo-100 
  text-indigo-800 
  dark:bg-indigo-900 
  dark:text-indigo-300
  ${({ badgecolor }) => badgecolor && `${badgecolor}`}
`

import tw from 'tailwind-styled-components'

export type Colors = {
  light: string
  dark: string
}

export interface StyledAccordionProps {
  rounded?: 'true' | 'false'
  last?: 'true' | 'false'
  colors?: Colors
}

export const Header = tw.button<StyledAccordionProps>`
  flex 
  items-center 
  justify-between 
  w-full 
  p-3.5
  pb-2
  pt-2 
  text-lg
  font-medium
  text-left 
  text-gray-700 
  border  
  border-gray-200 
  focus:ring-2 
  focus:ring-gray-200
  dark:focus:ring-gray-800 
  dark:border-gray-700 
  dark:text-gray-400  
  bg-gray-100
  hover:bg-gray-200
  dark:bg-gray-800
  dark:hover:bg-gray-900
  ${({ colors }) => (colors ? `${colors.light} ${colors.dark}` : ``)}
  ${({ rounded }) => rounded === 'true' && 'rounded-t-lg'}
  ${({ last }) => last === 'true' && 'rounded-b-lg'}
  ${({ disabled }) => disabled && 'opacity-40 cursor-not-allowed'}
`

export const Body = tw.div`
  p-3
  border 
  border-gray-100
  border-l-2
  border-r-2
  bg-white
  dark:border-gray-700  
  dark:bg-gray-900
`

import tw from 'tailwind-styled-components'

export interface ModalStyledProps {
  sx?: string
}

export const Background = tw.div`
  fixed 
  top-0 
  left-0 
  w-full 
  h-full 
  bg-opacity-50
  bg-gray-900
  z-50
  flex
  items-center
  justify-center
`

export const Container = tw.div<ModalStyledProps>`
  w-full
  m-2
  ${({ sx }) => (sx ? `${sx}` : 'max-w-7xl')}
  max-h-full
`

export const Content = tw.div`
  bg-white
  rounded-lg 
  shadow 
  dark:bg-gray-700
`

export const Header = tw.div`
  flex 
  items-center 
  justify-between 
  p-5 
  border
  border-gray-400 
  rounded-t-lg
  bg-gray-800
  dark:border-gray-600
  dark:bg-gray-900
`

export const Body = tw.div`
  p-2
  max-h-full
  dark:bg-gray-700
`

export const Title = tw.h3`
  flex
  items-center
  gap-3
  text-2xl 
  font-medium 
  text-white
`

export const Button = tw.button`
  text-gray-400 
  bg-transparent 
  hover:bg-gray-200 
  hover:text-gray-900 
  rounded-lg 
  text-sm 
  p-1.5 
  ml-auto 
  inline-flex 
  items-center 
  dark:hover:bg-gray-600 
  dark:hover:text-white
`

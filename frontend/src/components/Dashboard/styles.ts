import tw from 'tailwind-styled-components'

export const Dashboard = tw.div`
  p-3
  pt-2
  pb-4
  bg-white 
  dark:bg-gray-800 
  dark:border-gray-800 
  text-gray-900 
  dark:text-gray-200 
  border
  border-gray-200 
  rounded-md
  pb-3
  relative
`

export const Title = tw.h1`
  text-2xl 
  font-medium
  flex 
  items-center 
`

export const Cards = tw.div`
  grid 
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  3xl:grid-cols-5
  gap-4
  p-2
  overflow-y-auto
  overflow-x-hidden
  max-h-140
  md:max-h-180
`

export const Box = tw.div`
  grid 
  grid-cols-3
  p-2
  pb-4
  gap-2
`

import tw from 'tailwind-styled-components'

export const Box = tw.div`
  col-start-2 
  col-span-2 
  col-end-5 
  md:col-end-3 
`

export const Label = tw.label`
  text-sm 
  font-medium 
  text-gray-900 
  sr-only 
  dark:text-white
`

export const IconBox = tw.div`
  absolute 
  inset-y-0 
  left-0 
  flex 
  items-center 
  pl-2 
  pointer-events-none
`

export const Input = tw.input`
  w-full 
  pl-10
  text-sm 
  text-gray-900 
  border 
  border-gray-300 
  rounded-lg 
  bg-gray-50 
  focus:ring-blue-500 
  focus:border-blue-500 
  dark:bg-gray-700 
  dark:border-gray-600 
  dark:placeholder-gray-400 
  dark:text-white 
  dark:focus:ring-blue-500 
  dark:focus:border-blue-500
`

export const NoResults = tw.p`
  flex 
  items-center 
  justify-center 
  col-span-5 
  text-red-500
  dark:text-red-700
`

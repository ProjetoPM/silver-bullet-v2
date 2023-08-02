import { InputHTMLAttributes } from 'react'
import { IoIosSearch } from 'react-icons/io'
import {
  Box,
  IconBox,
  Input,
  Label,
} from 'src/components/Dashboard/Search/styles'

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
}

export const Search = ({
  label,
  placeholder,
  ...props
}: SearchProps) => {
  return (
    <>
      <Box>
        <Label htmlFor={props.id}>{label}</Label>
        <div className="relative">
          <IconBox>
            <IoIosSearch
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              size={32}
            />
          </IconBox>
          <Input
            type="search"
            id={props.id}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </Box>
    </>
  )
}

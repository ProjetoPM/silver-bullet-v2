import { ComponentProps, ReactNode } from 'react'
import { StyledInput } from './styles'

type SubsetInput = Pick<
  ComponentProps<'input'>,
  'value' | 'onChange' | 'disabled' | 'readOnly' | 'placeholder' | 'type'
>

type InputProps = {
  label: string
  children?: ReactNode
} & SubsetInput

export const Input = ({ label, children, ...props }: InputProps) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          <div className="flex items-center">{label}</div>
          <div>{children}</div>
        </div>
      </label>
      <StyledInput maxLength={5} {...props} />
    </>
  )
}

import { ComponentProps, ReactNode } from 'react'
import { StyledTextArea } from './styles'

type SubsetTextArea = Pick<
  ComponentProps<'textarea'>,
  'value' | 'onChange' | 'disabled' | 'readOnly' | 'rows' | 'placeholder'
>

type TextAreaProps = {
  label: string
  children?: ReactNode
} & SubsetTextArea

export const TextArea = ({
  label,
  value,
  children,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          <div className="flex items-center">{label}</div>
          <div>{children}</div>
        </div>
      </label>
      <StyledTextArea maxLength={5} {...props}>
        {value}
      </StyledTextArea>
    </>
  )
}

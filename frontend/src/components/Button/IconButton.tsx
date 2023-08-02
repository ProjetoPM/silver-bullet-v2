import { ComponentProps, ReactNode } from 'react'
import { StyledIconButton } from './styles'

type SubsetButton = Pick<
  ComponentProps<'button'>,
  'value' | 'onChange' | 'disabled' | 'type' | 'onClick'
>

type IconButtonProps = {
  label: string
  icon: ReactNode
} & SubsetButton

export const IconButton = ({ label, icon, ...props }: IconButtonProps) => {
  return (
    <>
      <StyledIconButton {...props}>
        {icon}
        Avaliar
      </StyledIconButton>
    </>
  )
}

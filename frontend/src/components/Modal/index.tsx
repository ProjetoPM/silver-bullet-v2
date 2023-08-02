import { MouseEvent } from 'react'

import { VscChromeClose } from 'react-icons/vsc'
import {
  Background,
  Body,
  Button,
  Container,
  Content,
  Header,
  ModalStyledProps,
  Title,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface ModalProps extends ModalStyledProps {
  title: string
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
  innerModal?: boolean
  icon?: IconProp
}

export const Modal = ({
  title,
  isVisible,
  children,
  sx,
  innerModal,
  icon,
  onClose,
}: ModalProps) => {
  if (!isVisible) return null

  document.body.classList.add('overflow-hidden')

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.target === e.currentTarget) {
      if (!innerModal) {
        document.body.classList.remove('overflow-hidden')
      }
      onClose()
    }
  }

  return (
    <Background onClick={handleClose}>
      <Container sx={sx}>
        <Content>
          <Header>
            <Title>
              {icon && <FontAwesomeIcon icon={icon} size={'sm'} />}
              {title}
            </Title>
            <Button type="button" onClick={onClose}>
              <VscChromeClose size={20} />
            </Button>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Container>
    </Background>
  )
}

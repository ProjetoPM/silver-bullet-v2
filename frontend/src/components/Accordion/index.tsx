import { useState, useEffect } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import {
  Body,
  Header,
  StyledAccordionProps,
} from 'src/components/Accordion/styles'

interface AccordionProps extends StyledAccordionProps {
  title: string
  children: React.ReactNode
  disabled?: boolean
  storageKey: string
}

export const Accordion = ({
  title,
  children,
  colors,
  rounded = 'false',
  last = 'false',
  disabled = false,
  storageKey,
}: AccordionProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const accordionState = JSON.parse(localStorage.getItem('accordion') || '{}')

    if (accordionState[storageKey]) {
      setOpen(accordionState[storageKey])
    }
  }, [storageKey])

  const handleClick = () => {
    setOpen(!isOpen)

    const accordionState = JSON.parse(localStorage.getItem('accordion') || '{}')

    localStorage.setItem(
      'accordion',
      JSON.stringify({ ...accordionState, [storageKey]: !isOpen }),
    )
  }

  return (
    <>
      <h2>
        <Header
          type="button"
          colors={colors}
          rounded={rounded}
          last={last}
          onClick={() => handleClick()}
          className={isOpen ? 'rounded-b-none' : ''}
          disabled={disabled}
        >
          <span>{title}</span>
          <IoMdArrowDropdown
            className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </Header>
      </h2>
      <div className={isOpen ? '' : 'hidden'}>
        <Body>{children}</Body>
      </div>
    </>
  )
}

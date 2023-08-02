import { Accordion } from 'src/components/Accordion'
import { Colors } from 'src/components/Accordion/styles'
import { CardLink } from 'src/components/Dashboard/CardLink'

type DataProps = {
  to: string
  title: string
}

interface PhaseAccordionProps {
  title: string
  rounded?: boolean
  last?: boolean
  colors?: Colors
  data: DataProps[]
  disabled?: boolean
  localStorageKey: string
}

export const PhaseAccordion = ({
  title,
  rounded,
  last,
  colors,
  data,
  disabled,
  localStorageKey,
}: PhaseAccordionProps) => {
  return (
    <Accordion
      title={title}
      rounded={rounded ? 'true' : 'false'}
      last={last ? 'true' : 'false'}
      disabled={disabled}
      storageKey={localStorageKey}
    >
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => {
          return (
            <CardLink
              key={index}
              to={item.to}
              title={item.title}
              colors={colors}
            />
          )
        })}
      </div>
    </Accordion>
  )
}

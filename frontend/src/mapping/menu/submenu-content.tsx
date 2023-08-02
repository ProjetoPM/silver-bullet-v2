import { Phase, PhaseEnum } from 'src/components/Dashboard/ModalItems'

export type SubmenuProps = {
  id: string
  content: JSX.Element
}

export const submenu: SubmenuProps[] = [
  {
    id: PhaseEnum.INTEGRATION,
    content: <Phase phase={PhaseEnum.INTEGRATION} />,
  },
  {
    id: PhaseEnum.SCOPE,
    content: <Phase phase={PhaseEnum.SCOPE} />,
  },
  {
    id: PhaseEnum.SCHEDULE,
    content: <Phase phase={PhaseEnum.SCHEDULE} />,
  },
  {
    id: PhaseEnum.COST,
    content: <Phase phase={PhaseEnum.COST} />,
  },
  {
    id: PhaseEnum.QUALITY,
    content: <Phase phase={PhaseEnum.QUALITY} />,
  },
  {
    id: PhaseEnum.RESOURCE,
    content: <Phase phase={PhaseEnum.RESOURCE} />,
  },
  {
    id: PhaseEnum.COMMUNICATION,
    content: <Phase phase={PhaseEnum.COMMUNICATION} />,
  },
  {
    id: PhaseEnum.RISK,
    content: <Phase phase={PhaseEnum.RISK} />,
  },
  {
    id: PhaseEnum.PROCUREMENT,
    content: <Phase phase={PhaseEnum.PROCUREMENT} />,
  },
  {
    id: PhaseEnum.STAKEHOLDER,
    content: <Phase phase={PhaseEnum.STAKEHOLDER} />,
  },
]

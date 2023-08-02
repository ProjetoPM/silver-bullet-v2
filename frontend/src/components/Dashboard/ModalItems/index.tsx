import { PhaseAccordion } from 'src/components/Dashboard/ModalItems/PhaseAccordion'
import { i18n } from 'src/i18n'
import {
  communication,
  cost,
  integration,
  procurement,
  quality,
  resource,
  risk,
  schedule,
  scope,
  stakeholder,
} from 'src/mapping/phases'
import {
  closingTitle,
  executingTitle,
  initiatingTitle,
  monitoringTitle,
  planningTitle,
} from 'src/mapping/phases/utils'
import { Box } from './styles'

export enum PhaseEnum {
  INTEGRATION = 'integration',
  SCOPE = 'scope',
  SCHEDULE = 'schedule',
  COST = 'cost',
  QUALITY = 'quality',
  RESOURCE = 'resources',
  COMMUNICATION = 'communication',
  RISK = 'risk',
  PROCUREMENT = 'procurement',
  STAKEHOLDER = 'stakeholders',
}

interface PhaseProps {
  phase: PhaseEnum
}

export const Phase = ({ phase }: PhaseProps) => {
  const getData = (index: string) => {
    switch (index) {
      case 'integration':
        return integration
      case 'scope':
        return scope
      case 'schedule':
        return schedule
      case 'cost':
        return cost
      case 'quality':
        return quality
      case 'resource':
        return resource
      case 'communication':
        return communication
      case 'risk':
        return risk
      case 'procurement':
        return procurement
      case 'stakeholder':
        return stakeholder
      default:
        return integration
    }
  }

  return (
    <Box>
      <PhaseAccordion
        title={i18n(`${initiatingTitle}`)}
        localStorageKey={`${phase}-{initiating}`}
        data={getData(phase).initiating}
        colors={{ light: 'border-gray-600', dark: 'border-gray-700' }}
        disabled={getData(phase).initiating.length === 0}
        rounded
      />
      <PhaseAccordion
        title={i18n(`${planningTitle}`)}
        localStorageKey={`${phase}-{planning}`}
        data={getData(phase).planning}
        colors={{ light: 'border-red-600', dark: 'border-red-800' }}
        disabled={getData(phase).planning.length === 0}
      />
      <PhaseAccordion
        title={i18n(`${executingTitle}`)}
        localStorageKey={`${phase}-{executing}`}
        data={getData(phase).executing}
        colors={{ light: 'border-blue-600', dark: 'border-blue-800' }}
        disabled={getData(phase).executing.length === 0}
      />
      <PhaseAccordion
        title={i18n(`${monitoringTitle}`)}
        localStorageKey={`${phase}-{monitoring}`}
        data={getData(phase).monitoring}
        colors={{ light: 'border-yellow-400', dark: 'border-yellow-600' }}
        disabled={getData(phase).monitoring.length === 0}
      />
      <PhaseAccordion
        title={i18n(`${closingTitle}`)}
        localStorageKey={`${phase}-{closing}`}
        data={getData(phase).closing}
        colors={{ light: 'border-green-400', dark: 'border-green-600' }}
        disabled={getData(phase).closing.length === 0}
        last
      />
    </Box>
  )
}

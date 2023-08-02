import { getCommunicationPhases } from 'src/mapping/phases/communication'
import { getCostPhases } from 'src/mapping/phases/cost'
import { getIntegrationPhases } from 'src/mapping/phases/integration'
import { getProcurementPhases } from 'src/mapping/phases/procurement'
import { getQualityPhases } from 'src/mapping/phases/quality'
import { getResourcePhases } from 'src/mapping/phases/resource'
import { getRiskPhases } from 'src/mapping/phases/risk'
import { getSchedulePhases } from 'src/mapping/phases/schedule'
import { getScopePhases } from 'src/mapping/phases/scope'
import { getStakeholderPhases } from 'src/mapping/phases/stakeholder'

export * from './communication'
export * from './cost'
export * from './integration'
export * from './procurement'
export * from './quality'
export * from './resource'
export * from './risk'
export * from './schedule'
export * from './scope'
export * from './stakeholder'

export const getAllPhases = () => {
  return [
    ...getIntegrationPhases(),
    ...getScopePhases(),
    ...getSchedulePhases(),
    ...getCostPhases(),
    ...getQualityPhases(),
    ...getResourcePhases(),
    ...getCommunicationPhases(),
    ...getRiskPhases(),
    ...getProcurementPhases(),
    ...getStakeholderPhases(),
  ]
}

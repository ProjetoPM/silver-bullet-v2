import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.resource'
const phases = `${area}.phases`
const planning = `${phases}.planning`
const executing = `${phases}.executing`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.resource

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const resource = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.resourceManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.resource).planning,
      colors,
    },
    {
      title: i18n(`${planning}.resourceBreakdownStructure`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.resource).planning,
      colors,
    },
  ],
  executing: [
    {
      title: i18n(`${executing}.teamPerformanceAssessment`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.resource).executing,
      colors,
    },
  ],
  monitoring: [],
  closing: [],
}

/**
 * Change the variable name.
 */
export const getResourcePhases = () => {
  return [
    ...resource.initiating,
    ...resource.planning,
    ...resource.executing,
    ...resource.monitoring,
    ...resource.closing,
  ]
}

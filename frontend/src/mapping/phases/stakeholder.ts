import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.stakeholder'
const phases = `${area}.phases`
const initiating = `${phases}.initiating`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.stakeholder

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const stakeholder = {
  initiating: [
    {
      title: i18n(`${initiating}.stakeholderRegister`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.stakeholder).initiating,
      colors,
    },
  ],
  planning: [
    {
      title: i18n(`${planning}.stakeholderEngagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.stakeholder).planning,
      colors,
    },
  ],
  executing: [],
  monitoring: [],
  closing: [],
}

/**
 * Change the variable name.
 */
export const getStakeholderPhases = () => {
  return [
    ...stakeholder.initiating,
    ...stakeholder.planning,
    ...stakeholder.executing,
    ...stakeholder.monitoring,
    ...stakeholder.closing,
  ]
}

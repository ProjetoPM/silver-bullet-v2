import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.communication'
const phases = `${area}.phases`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.communication

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const communication = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.communicationManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.communication).planning,
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
export const getCommunicationPhases = () => {
  return [
    ...communication.initiating,
    ...communication.planning,
    ...communication.executing,
    ...communication.monitoring,
    ...communication.closing,
  ]
}

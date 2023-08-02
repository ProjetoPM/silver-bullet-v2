import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.cost'
const phases = `${area}.phases`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.cost

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const cost = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.costManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.cost).planning,
      colors,
    },
    {
      title: i18n(`${planning}.costEstimates`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.cost).planning,
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
export const getCostPhases = () => {
  return [
    ...cost.initiating,
    ...cost.planning,
    ...cost.executing,
    ...cost.monitoring,
    ...cost.closing,
  ]
}

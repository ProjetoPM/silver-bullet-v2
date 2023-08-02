import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.risk'
const phases = `${area}.phases`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.risk

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const risk = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.riskManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.risk).planning,
      colors,
    },
    {
      title: i18n(`${planning}.riskRegister`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.risk).planning,
      colors,
    },
    {
      title: i18n(`${planning}.generalProjectRiskChecklist`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.risk).planning,
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
export const getRiskPhases = () => {
  return [
    ...risk.initiating,
    ...risk.planning,
    ...risk.executing,
    ...risk.monitoring,
    ...risk.closing,
  ]
}

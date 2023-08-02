import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.scope'
const phases = `${area}.phases`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.scope

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const scope = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.requirementsManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.scope).planning,
      colors,
    },
    {
      title: i18n(`${planning}.scopeManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.scope).planning,
      colors,
    },
    {
      title: i18n(`${planning}.requirementDocumentation`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.scope).planning,
      colors,
    },
    {
      title: i18n(`${planning}.projectScopeStatement`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.scope).planning,
      colors,
    },
    {
      title: i18n(`${planning}.workBreakdownStructure`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.scope).planning,
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
export const getScopePhases = () => {
  return [
    ...scope.initiating,
    ...scope.planning,
    ...scope.executing,
    ...scope.monitoring,
    ...scope.closing,
  ]
}

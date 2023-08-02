import { i18n } from 'src/i18n'
import { badgeAreaColors, badgeStructure, borderColors } from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.procurement'
const phases = `${area}.phases`
const planning = `${phases}.planning`
const executing = `${phases}.executing`
const monitoring = `${phases}.monitoring`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.procurement

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const procurement = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.procurementManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.procurement).planning,
      colors,
    },
    {
      title: i18n(`${executing}.procurementStatementOfWork`),
      to: './project-performance-report',
      ...badgeStructure(area, badgeAreaColors.procurement).executing,
      colors,
    },
  ],
  executing: [],
  monitoring: [
    {
      title: i18n(`${monitoring}.closedProcurementDocumentation`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.procurement).monitoring,
      colors,
    },
  ],
  closing: [],
}

/**
 * Change the variable name.
 */
export const getProcurementPhases = () => {
  return [
    ...procurement.initiating,
    ...procurement.planning,
    ...procurement.executing,
    ...procurement.monitoring,
    ...procurement.closing,
  ]
}

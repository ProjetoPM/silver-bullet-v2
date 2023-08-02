import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.quality'
const phases = `${area}.phases`
const planning = `${phases}.planning`
const executing = `${phases}.executing`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.quality

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const quality = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.qualityManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.quality).planning,
      colors,
    },
  ],
  executing: [
    {
      title: i18n(`${executing}.productQualityChecklists`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.quality).executing,
      colors,
    },
    {
      title: i18n(`${executing}.qualityReports`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.quality).executing,
      colors,
    },
  ],
  monitoring: [],
  closing: [],
}

/**
 * Change the variable name.
 */
export const getQualityPhases = () => {
  return [
    ...quality.initiating,
    ...quality.planning,
    ...quality.executing,
    ...quality.monitoring,
    ...quality.closing,
  ]
}

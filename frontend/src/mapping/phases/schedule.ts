import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.schedule'
const phases = `${area}.phases`
const planning = `${phases}.planning`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.schedule

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const schedule = {
  initiating: [],
  planning: [
    {
      title: i18n(`${planning}.scheduleManagementPlan`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.activityList`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.earnedValueManagement`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.scheduleNetworkDiagram`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.resourceRequirements`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.durationEstimates`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
      colors,
    },
    {
      title: i18n(`${planning}.stakeholderCalendar`),
      to: './not-mapped',
      ...badgeStructure(area, badgeAreaColors.schedule).planning,
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
export const getSchedulePhases = () => {
  return [
    ...schedule.initiating,
    ...schedule.planning,
    ...schedule.executing,
    ...schedule.monitoring,
    ...schedule.closing,
  ]
}

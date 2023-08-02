import { i18n } from 'src/i18n'
import {
  badgeAreaColors,
  badgeStructure,
  borderColors,
} from 'src/mapping/phases/utils'

/**
 * Start changing here.
 */
const area = 'areas.integration'
const phases = `${area}.phases`
const initiating = `${phases}.initiating`
const planning = `${phases}.planning`
const executing = `${phases}.executing`
const monitoring = `${phases}.monitoring`
const closing = `${phases}.closing`

/**
 * Change the 'borgderColors.area' variable.
 */
const colors = borderColors.integration

/**
 * Change the variable name. Change the 'title' and 'to' properties.
 */
export const integration = {
  initiating: [
    {
      title: i18n(`${initiating}.projectCharter`),
      to: '/project-charter',
      ...badgeStructure(area, badgeAreaColors.integration).initiating,
      colors,
    },
    {
      title: i18n(`${initiating}.businessCase`),
      to: '/business-case',
      ...badgeStructure(area, badgeAreaColors.integration).initiating,
      colors,
    },
    {
      title: i18n(`${initiating}.benefitsManagementPlan`),
      to: '/benefits-management-plan',
      ...badgeStructure(area, badgeAreaColors.integration).initiating,
      colors,
    },
    {
      title: i18n(`${initiating}.assumptionLog`),
      to: '/assumption-log',
      ...badgeStructure(area, badgeAreaColors.integration).initiating,
      colors,
    },
  ],
  planning: [
    {
      title: i18n(`${planning}.projectManagementPlan`),
      to: '/project-management-plan',
      ...badgeStructure(area, badgeAreaColors.integration).planning,
      colors,
    },
  ],
  executing: [
    {
      title: i18n(`${executing}.projectPerformanceAndMonitoringReport`),
      to: '/project-performance-report',
      ...badgeStructure(area, badgeAreaColors.integration).executing,
      colors,
    },
    {
      title: i18n(`${executing}.deliverableStatus`),
      to: '/deliverable-status',
      ...badgeStructure(area, badgeAreaColors.integration).executing,
      colors,
    },
    {
      title: i18n(`${executing}.workPerformanceReports`),
      to: '/work-performance-reports',
      ...badgeStructure(area, badgeAreaColors.integration).executing,
      colors,
    },
    {
      title: i18n(`${executing}.issueLog`),
      to: '/issue-log',
      ...badgeStructure(area, badgeAreaColors.integration).executing,
      colors,
    },
    {
      title: i18n(`${executing}.lessonLearnedRegister`),
      to: '/lesson-learned-register',
      ...badgeStructure(area, badgeAreaColors.integration).executing,
      colors,
    },
  ],
  monitoring: [
    {
      title: i18n(`${monitoring}.changeRequest`),
      to: '/change-request',
      ...badgeStructure(area, badgeAreaColors.integration).monitoring,
      colors,
    },
    {
      title: i18n(`${monitoring}.changeLog`),
      to: '/change-log',
      ...badgeStructure(area, badgeAreaColors.integration).monitoring,
      colors,
    },
  ],
  closing: [
    {
      title: i18n(`${closing}.projectClosureTerm`),
      to: '/project-closure-term',
      ...badgeStructure(area, badgeAreaColors.integration).closing,
      colors,
    },
    {
      title: i18n(`${closing}.finalReport`),
      to: '/final-report',
      ...badgeStructure(area, badgeAreaColors.integration).closing,
      colors,
    },
  ],
}

/**
 * Change the variable name.
 */
export const getIntegrationPhases = () => {
  return [
    ...integration.initiating,
    ...integration.planning,
    ...integration.executing,
    ...integration.monitoring,
    ...integration.closing,
  ]
}

import { i18n } from "src/i18n"

export const initiatingTitle = 'areas.phases.initiating.title'
export const planningTitle = 'areas.phases.planning.title'
export const executingTitle = 'areas.phases.executing.title'
export const monitoringTitle = 'areas.phases.monitoring.title'
export const closingTitle = 'areas.phases.closing.title'

export const badgeAreaColors = {
  integration:
    'bg-gray-500 text-gray-200 dark:bg-gray-700 dark:text-gray-300',
  scope: 'bg-green-600 text-green-200 dark:bg-green-900 dark:text-green-300',
  schedule:
    'bg-yellow-600 text-gray-200 dark:bg-yellow-900 dark:text-yellow-300',
  cost: 'bg-blue-400 text-gray-200 dark:bg-blue-900 dark:text-blue-300',
  quality:
    'bg-yellow-300 text-gray-500 dark:bg-purple-900 dark:text-purple-300',
  resource: 'bg-purple-500 text-gray-200 dark:bg-blue-900 dark:text-blue-300',
  communication:
    'bg-yellow-800 text-white dark:bg-yellow-900 dark:text-yellow-300',
  risk: 'bg-red-600 text-gray-200 dark:bg-red-900 dark:text-red-300',
  procurement:
    'bg-green-800 text-gray-200 dark:bg-green-900 dark:text-green-300',
  stakeholder: 'bg-blue-600 text-gray-200 dark:bg-blue-900 dark:text-blue-300',
}

export const badgePhaseColors = {
  initiating:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  planning: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  executing:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  monitoring: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-gray-300',
  closing:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
}

export const borderColors = {
  integration: {
    light: 'border-gray-500',
    dark: 'dark:border-gray-700',
  },
  scope: {
    light: 'border-green-600',
    dark: 'dark:border-green-800',
  },
  schedule: {
    light: 'border-yellow-600',
    dark: 'dark:border-yellow-700',
  },
  cost: {
    light: 'border-blue-400',
    dark: 'dark:border-blue-500',
  },
  quality: {
    light: 'border-yellow-300',
    dark: 'dark:border-yellow-500',
  },
  resource: {
    light: 'border-purple-500',
    dark: 'dark:border-purple-700',
  },
  communication: {
    light: 'border-yellow-800',
    dark: 'dark:border-yellow-900',
  },
  risk: {
    light: 'border-red-600',
    dark: 'dark:border-red-700',
  },
  procurement: {
    light: 'border-green-800',
    dark: 'dark:border-green-900',
  },
  stakeholder: {
    light: 'border-blue-600',
    dark: 'dark:border-blue-700',
  },
}

export const badgeStructure = (area, badgeArea) => {
  return {
    initiating: {
      badges: [i18n(`${area}.title`), i18n(`${initiatingTitle}`)],
      badgesColors: [
        `${badgeArea}`,
        `${badgePhaseColors.initiating}`,
      ],
    },
    planning: {
      badges: [i18n(`${area}.title`), i18n(`${planningTitle}`)],
      badgesColors: [
        `${badgeArea}`,
        `${badgePhaseColors.planning}`,
      ],
    },
    executing: {
      badges: [i18n(`${area}.title`), i18n(`${executingTitle}`)],
      badgesColors: [
        `${badgeArea}`,
        `${badgePhaseColors.executing}`,
      ],
    },
    monitoring: {
      badges: [i18n(`${area}.title`), i18n(`${monitoringTitle}`)],
      badgesColors: [
        `${badgeArea}`,
        `${badgePhaseColors.monitoring}`,
      ],
    },
    closing: {
      badges: [i18n(`${area}.title`), i18n(`${closingTitle}`)],
      badgesColors: [
        `${badgeArea}`,
        `${badgePhaseColors.closing}`,
      ],
    },
  }
}

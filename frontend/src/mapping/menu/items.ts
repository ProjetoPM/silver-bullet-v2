import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBullhorn,
  faClock,
  faExclamationCircle,
  faMoneyBill,
  faPeopleCarry,
  faSearch,
  faShoppingCart,
  faStar,
  faTrophy,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { i18n } from 'src/i18n'
import { borderColors } from 'src/mapping/phases/utils'

type DashboardItem = {
  id: string
  icon: IconProp
  title: string
  description: string
  colors?: {
    light: string
    dark: string
  }
  area?: string
}

export const dashboardItems: DashboardItem[] = [
  {
    id: 'integration',
    icon: faStar,
    title: i18n('areas.integration.title'),
    description: i18n('areas.integration.description'),
    colors: borderColors.integration,
    area: i18n('areas.badge'),
  },
  {
    id: 'scope',
    icon: faSearch,
    title: i18n('areas.scope.title'),
    description: i18n('areas.scope.description'),
    colors: borderColors.scope,
    area: i18n('areas.badge'),
  },
  {
    id: 'schedule',
    icon: faClock,
    title: i18n('areas.schedule.title'),
    description: i18n('areas.schedule.description'),
    colors: borderColors.schedule,
    area: i18n('areas.badge'),
  },
  {
    id: 'cost',
    icon: faMoneyBill,
    title: i18n('areas.cost.title'),
    description: i18n('areas.cost.description'),
    colors: borderColors.cost,
    area: i18n('areas.badge'),
  },
  {
    id: 'quality',
    icon: faTrophy,
    title: i18n('areas.quality.title'),
    description: i18n('areas.quality.description'),
    colors: borderColors.quality,
    area: i18n('areas.badge'),
  },
  {
    id: 'resources',
    icon: faPeopleCarry,
    title: i18n('areas.resource.title'),
    description: i18n('areas.resource.description'),
    colors: borderColors.resource,
    area: i18n('areas.badge'),
  },
  {
    id: 'communication',
    icon: faBullhorn,
    title: i18n('areas.communication.title'),
    description: i18n('areas.communication.description'),
    colors: borderColors.communication,
    area: i18n('areas.badge'),
  },
  {
    id: 'risk',
    icon: faExclamationCircle,
    title: i18n('areas.risk.title'),
    description: i18n('areas.risk.description'),
    colors: borderColors.risk,
    area: i18n('areas.badge'),
  },
  {
    id: 'procurement',
    icon: faShoppingCart,
    title: i18n('areas.procurement.title'),
    description: i18n('areas.procurement.description'),
    colors: borderColors.procurement,
    area: i18n('areas.badge'),
  },
  {
    id: 'stakeholders',
    icon: faUsers,
    title: i18n('areas.stakeholder.title'),
    description: i18n('areas.stakeholder.description'),
    colors: borderColors.stakeholder,
    area: i18n('areas.badge'),
  },
]

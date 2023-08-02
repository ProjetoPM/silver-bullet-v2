import { dashboardItems, submenu } from 'src/mapping'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouteMatch } from 'react-router-dom'
import { i18n } from 'src/i18n'
import Breadcrumb from 'src/view/shared/Breadcrumb'

const Submenu = () => {
  const { params } = useRouteMatch()

  const { content } = submenu.find(item => item.id === params.name) || {}
  const { title, icon } =
    dashboardItems.find(item => item.id === params.name) || {}

  if (!content) {
    window.location.href = '/404'
  }

  return (
    <>
      <Breadcrumb
        items={[[i18n('dashboard.menu'), '/'], [i18n('common.menu')]]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <div className="flex justify-content items-center gap-1 mb-6">
          <div>{icon && <FontAwesomeIcon icon={icon} size={'sm'} />}</div>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <div>{content}</div>
      </div>
    </>
  )
}

export default Submenu

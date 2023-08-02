import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { i18n } from 'src/i18n'
import actions from 'src/modules/projectCharter/form/projectCharterFormActions'
import selectors from 'src/modules/projectCharter/form/projectCharterFormSelectors'
import { getHistory } from 'src/modules/store'
import ProjectCharterForm from 'src/view/projectCharter/form/ProjectCharterForm'
import Breadcrumb from 'src/view/shared/Breadcrumb'
import Spinner from 'src/view/shared/Spinner'

function ProjectCharterFormPage(props) {
  const [dispatched, setDispatched] = useState(false)
  const dispatch = useDispatch()
  const match = useRouteMatch()

  const initLoading = useSelector(selectors.selectInitLoading)
  const saveLoading = useSelector(selectors.selectSaveLoading)
  const record = useSelector(selectors.selectRecord)

  const isEditing = Boolean(match.params.id)
  const title = isEditing
    ? i18n('entities.projectCharter.edit.title')
    : i18n('entities.projectCharter.new.title')

  useEffect(() => {
    dispatch(actions.doInit(match.params.id))
    setDispatched(true)
  }, [dispatch, match.params.id])

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data))
    } else {
      dispatch(actions.doCreate(data))
    }
  }

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectCharter.menu'), '/project-charter'],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <ProjectCharterForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            title={title}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/project-charter')}
          />
        )}
      </div>
    </>
  )
}

export default ProjectCharterFormPage

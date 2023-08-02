import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { i18n } from 'src/i18n'
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors'
import projectCharterSelectors from 'src/modules/projectCharter/projectCharterSelectors'
import destroyActions from 'src/modules/projectCharter/destroy/projectCharterDestroyActions'
import destroySelectors from 'src/modules/projectCharter/destroy/projectCharterDestroySelectors'
import ConfirmModal from 'src/view/shared/modals/ConfirmModal'
import { Modal } from 'src/components/Modal'

function ProjectCharterViewToolbar(props) {
  const [destroyConfirmVisible, setDestroyConfirmVisible] = useState(false)
  const [isVisible, setVisible] = useState(false)

  const dispatch = useDispatch()

  const id = props.match.params.id

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  )
  const hasPermissionToEdit = useSelector(
    projectCharterSelectors.selectPermissionToEdit,
  )
  const hasPermissionToDestroy = useSelector(
    projectCharterSelectors.selectPermissionToDestroy,
  )
  const destroyLoading = useSelector(destroySelectors.selectLoading)

  const doOpenDestroyConfirmModal = () => {
    setDestroyConfirmVisible(true)
  }

  const doCloseDestroyConfirmModal = () => {
    setDestroyConfirmVisible(false)
  }

  const doDestroy = () => {
    doCloseDestroyConfirmModal()
    dispatch(destroyActions.doDestroy(id))
  }

  return (
    <div className="mb-4">
      <Modal
        title="Avaliar Projeto"
        isVisible={isVisible}
        onClose={() => setVisible(!isVisible)}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Nome do Projeto
              </label>
              <p className="text-sm text-gray-700">TEste</p>
            </div>
          </div>
        </div>
      </Modal>
      <button
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
        type="button"
        onClick={() => setVisible(!isVisible)}
      >
        <FontAwesomeIcon className="mr-2" icon={faCheck} />
        Avaliar
      </button>
      {hasPermissionToEdit && (
        <Link to={`/project-charter/${id}/edit`}>
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="button"
          >
            <FontAwesomeIcon className="mr-2" icon={faEdit} />
            {i18n('common.edit')}
          </button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <button
          className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          type="button"
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
        >
          <FontAwesomeIcon className="mr-2" icon={faTrashAlt} />
          {i18n('common.destroy')}
        </button>
      )}

      {hasPermissionToAuditLogs && (
        <Link to={`/audit-logs?entityId=${encodeURIComponent(id)}`}>
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon className="mr-2" icon={faHistory} />
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}

      {destroyConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy()}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </div>
  )
}

export default ProjectCharterViewToolbar

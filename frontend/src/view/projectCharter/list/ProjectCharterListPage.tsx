import React from 'react'
import { i18n } from 'src/i18n'
import ProjectCharterListFilter from 'src/view/projectCharter/list/ProjectCharterListFilter'
import ProjectCharterListTable from 'src/view/projectCharter/list/ProjectCharterListTable'
import ProjectCharterListToolbar from 'src/view/projectCharter/list/ProjectCharterListToolbar'
import Breadcrumb from 'src/view/shared/Breadcrumb'

function ProjectCharterListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectCharter.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.projectCharter.list.title')}
        </h1>
        <ProjectCharterListToolbar />
        <ProjectCharterListFilter />
        <ProjectCharterListTable />
      </div>
    </>
  )
}

export default ProjectCharterListPage

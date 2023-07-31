import React from 'react';
import { i18n } from 'src/i18n';
import ProjectManagementPlanListFilter from 'src/view/projectManagementPlan/list/ProjectManagementPlanListFilter';
import ProjectManagementPlanListTable from 'src/view/projectManagementPlan/list/ProjectManagementPlanListTable';
import ProjectManagementPlanListToolbar from 'src/view/projectManagementPlan/list/ProjectManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProjectManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.projectManagementPlan.list.title')}
        </h1>
        <ProjectManagementPlanListToolbar />
        <ProjectManagementPlanListFilter />
        <ProjectManagementPlanListTable />
      </div>
    </>
  );
}

export default ProjectManagementPlanListPage;

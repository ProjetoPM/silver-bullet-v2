import React from 'react';
import { i18n } from 'src/i18n';
import RequirementsManagementPlanListFilter from 'src/view/requirementsManagementPlan/list/RequirementsManagementPlanListFilter';
import RequirementsManagementPlanListTable from 'src/view/requirementsManagementPlan/list/RequirementsManagementPlanListTable';
import RequirementsManagementPlanListToolbar from 'src/view/requirementsManagementPlan/list/RequirementsManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function RequirementsManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.requirementsManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.requirementsManagementPlan.list.title')}
        </h1>
        <RequirementsManagementPlanListToolbar />
        <RequirementsManagementPlanListFilter />
        <RequirementsManagementPlanListTable />
      </div>
    </>
  );
}

export default RequirementsManagementPlanListPage;

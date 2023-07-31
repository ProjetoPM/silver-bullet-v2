import React from 'react';
import { i18n } from 'src/i18n';
import ResourceManagementPlanListFilter from 'src/view/resourceManagementPlan/list/ResourceManagementPlanListFilter';
import ResourceManagementPlanListTable from 'src/view/resourceManagementPlan/list/ResourceManagementPlanListTable';
import ResourceManagementPlanListToolbar from 'src/view/resourceManagementPlan/list/ResourceManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ResourceManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resourceManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.resourceManagementPlan.list.title')}
        </h1>
        <ResourceManagementPlanListToolbar />
        <ResourceManagementPlanListFilter />
        <ResourceManagementPlanListTable />
      </div>
    </>
  );
}

export default ResourceManagementPlanListPage;
